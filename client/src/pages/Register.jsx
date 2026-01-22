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
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Invalid email address"

    if (!/^\d{10}$/.test(form.mobile))
      return "Mobile number must be 10 digits"

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!&]).{6,}$/

    if (!passwordRegex.test(form.password))
      return "Password must contain uppercase, number & special char"

    if (form.password !== form.confirmPassword)
      return "Passwords do not match"

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
      setLoading(true)

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
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {["fullName", "email", "mobile", "address"].map((field) => (
          <input
            key={field}
            className="w-full mb-3 p-3 border rounded"
            placeholder={field.replace(/^\w/, c => c.toUpperCase())}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
          />
        ))}

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 border rounded"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-5 p-3 border rounded"
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600"
        >
          {loading ? "Sending OTP..." : "Register"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
