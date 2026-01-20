import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/auth/register", form);
      alert("OTP sent to your email");
      navigate("/verify-otp", { state: { email: form.email } });
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input name="fullName" placeholder="Full Name" onChange={handleChange}
          className="w-full mb-2 p-2 border rounded" />

        <input name="mobile" placeholder="Mobile Number" onChange={handleChange}
          className="w-full mb-2 p-2 border rounded" />

        <input name="address" placeholder="Address" onChange={handleChange}
          className="w-full mb-2 p-2 border rounded" />

        <input name="email" type="email" placeholder="Email" onChange={handleChange}
          className="w-full mb-2 p-2 border rounded" />

        <input name="password" type="password" placeholder="Password"
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded" />

        <input name="confirmPassword" type="password"
          placeholder="Confirm Password" onChange={handleChange}
          className="w-full mb-4 p-2 border rounded" />

        <button
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          {loading ? "Sending OTP..." : "Register"}
        </button>
      </form>
    </div>
  );
}
