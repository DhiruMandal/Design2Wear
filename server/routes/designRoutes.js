import express from "express"
import { saveDesign } from "../controllers/designController.js"

const router = express.Router()

router.post("/save", saveDesign)

export default router
