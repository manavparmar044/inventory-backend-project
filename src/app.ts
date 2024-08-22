import express from "express"
import cors from "cors"
import { productRoutes } from "./app/modules/products/productRoutes"
import { orderRoutes } from "./app/modules/orders/orderRoutes"
import { userRoutes } from "./app/modules/users/userRoutes"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/users", userRoutes)

app.listen(8000, ()=>{
    console.log("Listening");    
})

app.get('/', (req,res)=>{
    // console.log("Hello world");
    res.send('Inventory Backend is listening')
})

export default app