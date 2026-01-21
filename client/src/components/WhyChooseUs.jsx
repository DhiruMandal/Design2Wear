export default function WhyChooseUs() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Why <span className="text-orange-500">Design2Wear</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#8458B3] p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-white-600 mt-2">
              Top-grade fabrics and prints.
            </p>
          </div>

          <div className="bg-[#8458B3] p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Fast Delivery</h3>
            <p className="text-white-600 mt-2">
              On-time delivery guaranteed.
            </p>
          </div>

          <div className="bg-[#8458B3] p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Custom Designs</h3>
            <p className="text-white-600 mt-2">
              Fully personalized fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
