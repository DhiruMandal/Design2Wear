export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-[#8458B3] rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-200 mt-3">{description}</p>
    </div>
  )
}
