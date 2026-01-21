import AdminLayout from "../../components/admin/AdminLayout"

export default function Services() {
  const services = [
    { id: 1, title: "Custom T-Shirts" },
    { id: 2, title: "Brand Printing" }
  ]

  return (
    <AdminLayout>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Add Service
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Title</th>
              <th className="text-right py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="py-3">{s.title}</td>
                <td className="text-right space-x-3">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
