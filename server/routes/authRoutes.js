const router = require("express").Router()
const User = require("../models/User")
const mailer = require("../config/mailer")

router.post("/register", async (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000)
  const user = new User({ ...req.body, otp })
  await user.save()

  await mailer.sendMail({
    to: req.body.email,
    subject: "Design2Wear OTP",
    text: `Your OTP is ${otp}`
  })

  res.json({ message: "OTP sent" })
})

router.post("/verify", async (req, res) => {
  const user = await User.findOne(req.body)
  if (!user) return res.status(400).json({ message: "Invalid OTP" })

  user.isVerified = true
  await user.save()
  res.json({ message: "Verified" })
})

module.exports = router
