import { Request, Response } from "express"
import productValidationSchema from "./productValidation"
import { productServices } from "./productServices"

const createProduct = async (req: Request,res: Response)=>{
    try{
        // res.send("Product route from controller")
        // console.log(req.body);
        //ZOD Validation
        const zodParser = productValidationSchema.parse(req.body)
        const result = await productServices.saveNewProductToDB(zodParser)
        res.status(500).json({
            success: true,
            message: "Product saved",
            data: result
        })
        
    }
    catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        })
    }
}

export const productController = {
    createProduct
}