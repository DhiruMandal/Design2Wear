import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const { pathname } = useLocation()

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Services", path: "/admin/services" },
    { name: "Orders", path: "/admin/orders" },
  ]

  return (
    <aside className="w-64 bg-black text-white hidden md:block">
      <div className="p-6 text-2xl font-bold text-orange-500">
        Design2Wear
      </div>

      <nav className="mt-6 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-6 py-3 hover:bg-gray-800 ${
              pathname === item.path ? "bg-gray-800" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
