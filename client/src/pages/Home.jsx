import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">
        Customize Your Style with <span className="text-orange-500">Design2Wear</span>
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        Design custom jerseys, hoodies, banners, cups, and ID cards exactly the way you want.
      </p>

      <Link
        to="/products"
        className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
      >
        Start Designing
      </Link>
    </div>
  )
}
