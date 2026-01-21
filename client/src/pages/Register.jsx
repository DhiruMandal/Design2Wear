import { useState } from "react"
import api from "../api/axios"
import { useNavigate, Link } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")

  const validateForm = () => {
    // Email validation
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Please enter a valid email address"
    }

    // Mobile validation (10 digits)
    if (!/^\d{10}$/.test(form.mobile)) {
      return "Mobile number must be exactly 10 digits"
    }

    // Password strength
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!&]).{5,}$/

    if (!passwordRegex.test(form.password)) {
      return "Password must be 5+ chars, include uppercase, number & special character (@#$%!&)"
    }

    // Confirm password
    if (form.password !== form.confirmPassword) {
      return "Passwords do not match"
    }

    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      const res = await api.post("/auth/register", {
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        address: form.address,
        password: form.password,
      })

      localStorage.setItem("userId", res.data.userId)
      navigate("/verify-otp")
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#8458B3] p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <input
          className="w-full mb-3 p-3 border rounded focus:ring-2 focus:ring-orange-500"
          placeholder="Full Name"
          required
          onChange={(e) =>
            setForm({ ...form, fullName: e.target.value })
          }
        />

        <input
          className="w-full mb-3 p-3 border rounded focus:ring-2 focus:ring-orange-500"
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="w-full mb-3 p-3 border rounded focus:ring-2 focus:ring-orange-500"
          placeholder="Mobile"
          required
          onChange={(e) =>
            setForm({ ...form, mobile: e.target.value })
          }
        />

        <input
          className="w-full mb-3 p-3 border rounded focus:ring-2 focus:ring-orange-500"
          placeholder="Address"
          required
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <input
          className="w-full mb-3 p-3 border rounded focus:ring-2 focus:ring-orange-500"
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <input
          className="w-full mb-5 p-3 border rounded focus:ring-2 focus:ring-orange-500"
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
