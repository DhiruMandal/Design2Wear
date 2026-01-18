const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  basePrice: Number,
  image: String,
  sizes: [String],
  colors: [String]
})

module.exports = mongoose.model("Product", productSchema)
