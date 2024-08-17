import dotenv from "dotenv"
dotenv.config()

export default{
    port: process.env.port,
    dbUrl: process.env.MONGO_URL
}