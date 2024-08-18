import express from "express"
import { productController } from "./productController"
const router = express.Router()

// router.get("/", productController.createProduct)
router.post("/", productController.createProduct)

router.get('/',productController.getAllProducts)

router.get("/:productId",productController.getSingleProduct)

router.put("/:productId",productController.updateProduct)

router.delete("/:productId",productController.deleteProduct)

export const productRoutes = router