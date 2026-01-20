import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/verify-otp", { email, otp });
      alert("Email verified successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  if (!email) {
    return <p className="text-center mt-10">Invalid access</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleVerify}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Verify
        </button>
      </form>
    </div>
  );
}
