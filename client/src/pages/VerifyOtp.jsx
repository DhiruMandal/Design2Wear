import { useState } from "react"
import api from "../api/axios"
import { useNavigate } from "react-router-dom"

export default function VerifyOtp() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")

  const handleVerify = async () => {
    await api.post("/auth/verify-otp", {
      userId: localStorage.getItem("userId"),
      otp,
    })
    navigate("/login")
  }

  return (
    <div className="p-6">
      <input placeholder="Enter OTP" onChange={e => setOtp(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
    </div>
  )
}
