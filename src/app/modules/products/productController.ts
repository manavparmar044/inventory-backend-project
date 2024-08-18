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

const getAllProducts = async(req: Request, res: Response)=>{
    const result = await productServices.getProductsFromDB()
    res.status(200).json({
        success: true,
        message: "Products fetched",
        data: result
    })
}

const getSingleProduct = async (req: Request,res: Response)=>{
    try{
        const {productId} = req.params;
        const result = await productServices.getSingleProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Product fetched",
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

const updateProduct = async (req: Request, res: Response)=>{
    try{
        const {productId} = req.params
        const data = req.body
        const result = await productServices.updateProductInDB(productId,data)
        res.status(200).json({
            success: true,
            message: "Product updated",
            data: result
        })
    }
    catch(err: any){
        console.log("Unable to update");
        
        res.status(500).json({
            success: false,
            message: err.message,
            error: err
        })
    }
}

const deleteProduct = async (req: Request,res: Response)=>{
    try{
        const {productId} = req.params
        await productServices.deleteProductFromDB(productId)
        res.status(200).json({
            success: true,
            message: "Product deleted",
            data: null
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
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}