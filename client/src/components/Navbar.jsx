import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        Design2Wear
      </Link>

      <div className="space-x-6 hidden md:block">
        <Link className="hover:text-orange-400" to="/">Home</Link>
        <Link className="hover:text-orange-400" to="/products">Products</Link>
        <Link className="hover:text-orange-400" to="/contact">Contact</Link>
        <Link className="hover:text-orange-400" to="/login">Login</Link>
      </div>
    </nav>
  )
}
