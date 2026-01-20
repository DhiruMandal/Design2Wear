import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-1 rounded transition font-medium ${
      isActive
        ? "bg-[#bcfd4c] text-black"
        : "text-black hover:bg-[#bcfd4c]"
    }`

  return (
    <nav className="bg-[#a0aecd] px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black">
        Design2Wear
      </Link>

      {/* Links */}
      <div className="flex gap-4">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/products" className={navLinkClass}>
          Products
        </NavLink>

        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>

        <NavLink to="/register" className={navLinkClass}>
          Register
        </NavLink>

        <NavLink to="/customize" className={navLinkClass}>
          Customize
        </NavLink>
      </div>
    </nav>
  )
}
