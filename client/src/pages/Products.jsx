// Products.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    name: "Custom T-Shirt",
    image:
      "https://images.prismic.io/rushordertees-web/e225cda8-d94c-4f4a-8bef-d0ddbdd506a3_Performance%20Shirts.jpg",
  },
  {
    name: "Hoodies",
    image:
      "https://a.storyblok.com/f/165154/1280x720/2ba3c03ccf/7_collection-of-hoodies_2.jpg/m/",
  },
  {
    name: "Banners",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/677/672/original/business-web-banner-template.jpg",
  },
  {
    name: "Cups",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/352611612/FG/YO/DV/76768443/coffee-mug-printing-service-500x500.jpg",
  },
  {
    name: "ID Cards",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.SLSru6maW_thbAAqyv9rCwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen px-10 py-12">
      {/* Navbar */}
      <Navbar />

      <h2 className="text-4xl font-bold mb-10 text-center text-yellow-800">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#8458B3] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mt-2 text-black-500 text-sm">
                Premium quality {product.name.toLowerCase()} for everyday use.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
