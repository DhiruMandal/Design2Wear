import { Link } from "react-router-dom"

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-4">
          <Link to="/admin" className="block hover:text-orange-400">
            Dashboard
          </Link>
          <Link to="/admin/upload" className="block hover:text-orange-400">
            Upload Jersey
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
