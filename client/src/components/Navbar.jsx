import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        Design2Wear
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/products" className="hover:text-orange-400">Products</Link>
        <Link to="/login" className="hover:text-orange-400">Login</Link>
        <Link to="/register" className="hover:text-orange-400">Register</Link>
        <Link to="/customize" className="hover:text-orange-400">Customize</Link>

      </div>
    </nav>
  )
}
