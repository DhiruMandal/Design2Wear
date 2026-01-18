const AddProduct = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <input className="border p-2 w-full mb-3" placeholder="Product Name" />
      <input className="border p-2 w-full mb-3" placeholder="Category" />
      <input className="border p-2 w-full mb-3" placeholder="Price" />

      <button className="bg-black text-white w-full py-2">
        Add
      </button>
    </div>
  )
}

export default AddProduct
