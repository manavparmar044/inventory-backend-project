import { TOrder } from "./orderInterface"
import { orderModel } from "./orderModel"

const createNewOrder = async (orderData: TOrder)=>{
    return await orderModel.create(orderData)
}

export const orderServices = {
    createNewOrder
}