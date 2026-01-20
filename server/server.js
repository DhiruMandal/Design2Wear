import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.use("/api/products", productRoutes)

const PORT = 5000
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)
