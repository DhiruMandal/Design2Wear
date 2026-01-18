import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="space-x-4">
        <Link to="/admin/add-product" className="bg-black text-white px-4 py-2">
          Add Product
        </Link>
        <Link to="/admin/orders" className="bg-gray-700 text-white px-4 py-2">
          Manage Orders
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
