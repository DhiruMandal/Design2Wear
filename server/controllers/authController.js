import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { sendOTP } from "../utils/sendOTP.js"

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(404).json({ message: "User not found" })

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(401).json({ message: "Invalid password" })

  const otp = Math.floor(100000 + Math.random() * 900000).toString()

  user.otp = otp
  user.otpExpiry = Date.now() + 5 * 60 * 1000 // 5 min
  await user.save()

  await sendOTP(user.email, otp)

  res.json({ message: "OTP sent to registered email" })
}

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(404).json({ message: "User not found" })

  if (
    user.otp !== otp ||
    user.otpExpiry < Date.now()
  ) {
    return res.status(400).json({ message: "Invalid or expired OTP" })
  }

  user.otp = null
  user.otpExpiry = null
  await user.save()

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  )

  res.json({
    token,
    role: user.role,
  })
}
