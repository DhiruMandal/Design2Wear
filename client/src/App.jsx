import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Customize from "./pages/Customize"

import AdminDashboard from "./admin/AdminDashboard"
import UploadJersey from "./admin/UploadJersey"
import AdminRoute from "./auth/AdminRoute"
import VerifyOtp from "./pages/VerifyOtp";

export default function App() {
  return (
    <>
      {/* USER LAYOUT */}
      <Navbar />

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/verify-otp" element={<VerifyOtp />} /> 
        {/* ADMIN ROUTES (Protected) */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/upload"
          element={
            <AdminRoute>
              <UploadJersey />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}
