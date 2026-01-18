const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,
  customization: Object,
  status: { type: String, default: "Pending" }
})

module.exports = mongoose.model("Order", orderSchema)
