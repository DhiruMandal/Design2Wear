import { useState } from "react"
import api from "../api/axios"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      })

      // ✅ SAVE AUTH DATA
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", res.data.role)

      // 🔥 ROLE-BASED REDIRECT
      if (res.data.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#8458B3] p-8 rounded-xl shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Design2Wear
        </h2>

        <input
          className="w-full mb-4 p-3 border rounded"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 p-3 border rounded"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
        >
          Login
        </button>

        {/* 🔹 REGISTER LINK */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  )
}
