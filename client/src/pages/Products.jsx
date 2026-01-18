const products = [
  { name: "Custom Jersey", image: "👕" },
  { name: "Hoodies", image: "🧥" },
  { name: "Banners", image: "🏳️" },
  { name: "Cups", image: "☕" },
  { name: "ID Cards", image: "🪪" },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-white px-10 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-6xl mb-4">{p.image}</div>
            <h3 className="text-xl font-semibold">{p.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
