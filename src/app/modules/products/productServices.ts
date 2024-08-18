import { TProduct } from "./productInterface";
import { Product } from "./productModel";

const saveNewProductToDB = async (productData: TProduct) => {
    const res = await Product.create(productData)
    return res
}

const getProductsFromDB = async ()=>{
    const data = await Product.find()
    return data;
}

const getSingleProductFromDB = async (id: string)=>{
    const result = await Product.findById(id)
    return result;
}

const updateProductInDB = async (productId: string, data: TProduct)=>{
    const result = await Product.findByIdAndUpdate(productId,data, {new: true})
    return result
}

const deleteProductFromDB = async (productId: string)=>{
    const result = await Product.findByIdAndDelete(productId)
    return result
}

export const productServices = {
    saveNewProductToDB,
    getProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB
}