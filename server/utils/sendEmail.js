await transporter.sendMail({
  from: `"Design2Wear" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Design2Wear OTP Verification",
  html: `
    <div style="font-family:Arial">
      <h2>Verify your account</h2>
      <p>Your OTP is:</p>
      <h1 style="letter-spacing:3px">${otp}</h1>
      <p>This OTP expires in 10 minutes</p>
    </div>
  `,
})
