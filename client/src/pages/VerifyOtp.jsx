import { useState } from "react"
import api from "../api/axios"
import { useNavigate } from "react-router-dom"

export default function VerifyOtp() {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleVerify = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const userId = localStorage.getItem("userId")

      await api.post("/auth/verify-otp", {
        userId,
        otp,
      })

      alert("Account verified successfully")
      localStorage.removeItem("userId")
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900">
      <form
        onSubmit={handleVerify}
        className="bg-white p-8 rounded-xl shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Verify OTP
        </h2>

        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <input
          className="w-full mb-4 p-3 border rounded text-center tracking-widest"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
          Verify
        </button>
      </form>
    </div>
  )
}
