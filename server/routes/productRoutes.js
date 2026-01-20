import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { adminOnly } from "../middleware/adminMiddleware.js"

const router = express.Router()

router.post("/", protect, adminOnly, uploadMiddleware, createProduct)

export default router
