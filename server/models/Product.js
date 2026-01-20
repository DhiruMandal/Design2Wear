import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    frontImage: { type: String, required: true },
    backImage: { type: String, required: true },
    basePrice: { type: Number, required: true },
    category: { type: String, default: "jersey" }
  },
  { timestamps: true }
)

export default mongoose.model("Product", productSchema)
