import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="mt-3 font-semibold">{product.name}</h2>
      <p className="text-gray-600">Rs. {product.basePrice}</p>

      <Link
        to={`/customize/${product._id}`}
        className="block bg-black text-white text-center py-2 mt-3 rounded"
      >
        Customize
      </Link>
    </div>
  )
}

export default ProductCard
