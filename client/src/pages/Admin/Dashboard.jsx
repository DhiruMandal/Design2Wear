import AdminLayout from "../../components/admin/AdminLayout"

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Services" value="6" />
        <StatCard title="Orders" value="120" />
        <StatCard title="Revenue" value="₹45,000" />
      </div>
    </AdminLayout>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  )
}
