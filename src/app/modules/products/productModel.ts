import {Schema,model} from "mongoose"
import { TInventory, TProduct, TVariant } from "./productInterface"

const variantSchema = new Schema<TVariant>({
    type: String,
    value: String,
})

const inventorySchema = new Schema<TInventory>({
    quantity: Number,
    inStock: Boolean,
})

const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    category: String,
    tags: [String],
    variants: [variantSchema],
    inventory: inventorySchema
})

export const Product = model("Product", ProductSchema)