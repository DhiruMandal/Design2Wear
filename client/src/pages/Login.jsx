import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(1)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    })
    setStep(2)
  }

  const verifyOTP = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/verify-otp",
      { email, otp }
    )

    localStorage.setItem("user", JSON.stringify(res.data))

    if (res.data.role === "admin") {
      navigate("/admin")
    } else {
      navigate("/")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-orange-500 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">
              Enter OTP
            </h2>

            <input
              type="text"
              placeholder="6-digit OTP"
              className="w-full mb-4 p-2 border rounded"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOTP}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}

      </div>
    </div>
  )
}
