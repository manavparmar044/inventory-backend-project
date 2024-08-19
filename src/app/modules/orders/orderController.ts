import { Request, Response } from "express";
import orderValidation from "./orderValidation";
import { Product } from "../products/productModel";
import { orderServices } from "./orderServices";

const createOrder = async(req: Request, res: Response)=>{
    try{
        //Zod Validation
        const zodValidation = orderValidation.safeParse(req.body)
        if(typeof zodValidation.error!== "undefined" && zodValidation.error.name == "zodError"){
            const errorLists = zodValidation.error.issues.map((err)=>err.message)
            return res.status(500).json({
                success: false,
                message: "Validation error",
                errors: errorLists
            })
        }
        if(zodValidation.success){
            const product = await Product.findById(zodValidation.data.productId)
            if(product && product.inventory.quantity < zodValidation.data.quantity){
                return res.status(400).json({
                    success: false,
                    message: "Insufficient data"
                })
            }
            if(product){
                product.inventory.quantity = product.inventory.quantity - zodValidation.data.quantity
                product.inventory.inStock = product.inventory.quantity === 0 ? false: true
                const newOrder = await orderServices.createNewOrder(zodValidation.data)
                await product.save()
                return res.status(200).json({
                    success: true,
                    message: "Order created",
                    data: newOrder
                })
            }
        }
    }
    catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        })
    }
}

export const orderController = {
    createOrder
}