import express from "express"
import { orderController } from "./orderController"

const router = express.Router()

router.post("/",orderController.createOrder)
router.get("/",orderController.getAllOrders)

export const orderRoutes = router