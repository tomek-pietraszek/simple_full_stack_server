import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"

import countRouter from "./routes/dataRouter.js"

import { globalErrorHandler, routeNotFound } from "./middlewares/errorHandlers.js"


const app = express()

const { PORT = 3000, DB_URI } = process.env


app
.use(cors())
.use(express.json())
.use(cookieParser())
.use("/counts", countRouter )
.use(routeNotFound)
.use(globalErrorHandler)
.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))


mongoose
.connect(DB_URI)
.then(()=> console.log("connected to the db"))
.catch(()=> console.log("error connecting to db"))