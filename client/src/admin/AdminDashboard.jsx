import AdminLayout from "./AdminLayout"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Welcome Admin 👋</h1>
      <p className="text-gray-600">
        Upload and manage jersey designs from here.
      </p>
    </AdminLayout>
  )
}
