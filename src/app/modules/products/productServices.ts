import { TProduct } from "./productInterface";
import { Product } from "./productModel";

const saveNewProductToDB = async (productData: TProduct) => {
    const res = await Product.create(productData)
    return res
}

export const productServices = {
    saveNewProductToDB
}