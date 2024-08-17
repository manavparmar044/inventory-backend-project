import mongoose from "mongoose";
import app from "./app"
import config from "./app/config";

async function main(){
    await mongoose.connect(config.dbUrl as string)

    app.listen(config.port, ()=>{
        console.log("Example run");    
    })
}

main().then(()=>console.log("MongoDb connected")
).catch(err=>console.log(err)
)

