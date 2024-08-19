import express from "express"
import { orderController } from "./orderController"

const router = express.Router()

router.post("/",orderController.createOrder)

export const orderRoutes = router