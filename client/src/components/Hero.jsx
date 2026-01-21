export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Design Your <span className="text-orange-500">Perfect Wear</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Create custom fashion with premium design, modern technology,
          and seamless experience.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Designs
          </button>
        </div>
      </div>
    </section>
  )
}
