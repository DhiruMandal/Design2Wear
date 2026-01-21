import ServiceCard from "./ServiceCard"

export default function Services() {
  const services = [
    { title: "Custom T-Shirts", description: "Design your own custom t-shirts with ease." },
    { title: "Brand Printing", description: "High quality printing for your brand." },
    { title: "Bulk Orders", description: "Affordable bulk fashion solutions." }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-orange-500">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
