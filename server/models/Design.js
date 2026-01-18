import mongoose from "mongoose"

const designSchema = new mongoose.Schema(
  {
    color: String,
    name: String,
    number: String,
    view: String,
    logo: String, // base64
  },
  { timestamps: true }
)

export default mongoose.model("Design", designSchema)
