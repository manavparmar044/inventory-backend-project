import express from "express"
import { productController } from "./productController"
const router = express.Router()

// router.get("/", productController.createProduct)
router.post("/", productController.createProduct)

export const productRoutes = router