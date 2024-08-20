import { TOrder } from "./orderInterface"
import { orderModel } from "./orderModel"

const createNewOrder = async (orderData: TOrder)=>{
    return await orderModel.create(orderData)
}

const getOrdersFromDB = async (query: string | undefined) =>{
    const filter = query?{email: query}: {}
    return await orderModel.find(filter)
}

export const orderServices = {
    createNewOrder,
    getOrdersFromDB
}