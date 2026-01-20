import nodemailer from "nodemailer";

const sendOtp = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Design2Wear" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your Design2Wear account",
    html: `
      <h2>Design2Wear OTP Verification</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 10 minutes.</p>
    `,
  });
};

export default sendOtp;
