import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// 🔐 REGISTER
export const register = async (req, res) => {
  try {
    const { fullName, email, password, mobile, address } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const otp = Math.floor(100000 + Math.random() * 900000)
    const otpExpires = Date.now() + 10 * 60 * 1000

    const user = await User.create({
      fullName,
      email,
      mobile,
      address,
      password: hashedPassword,
      otp,
      otpExpires,
    })

    await transporter.sendMail({
      from: `"Design2Wear" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Design2Wear OTP Verification",
      html: `<h2>Your OTP is <b>${otp}</b></h2>`,
    })

    res.status(201).json({
      message: "OTP sent to email",
      userId: user._id,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// ✅ VERIFY OTP
export const verifyOtp = async (req, res) => {
  try {
    const { userId, otp } = req.body

    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ message: "User not found" })

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" })
    }

    user.isVerified = true
    user.otp = undefined
    user.otpExpires = undefined
    await user.save()

    res.json({ message: "Account verified successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// 🔑 LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: "Invalid credentials" })

    if (!user.isVerified) {
      return res.status(403).json({ message: "Verify your email first" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.json({
      token,
      role: user.role,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
