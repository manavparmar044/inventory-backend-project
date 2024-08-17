import express from "express"
import cors from "cors"
import { productRoutes } from "./app/modules/products/productRoutes"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/products", productRoutes)

app.listen(8000, ()=>{
    console.log("Listening");    
})

app.get('/', (req,res)=>{
    // console.log("Hello world");
    res.send('Inventory Backend is listening')
})

export default app