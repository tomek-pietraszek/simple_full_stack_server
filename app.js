import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import countRouter from "./routes/dataRouter.js";

import {
  globalErrorHandler,
  routeNotFound,
} from "./middlewares/errorHandlers.js";

const app = express();

const { PORT = 5000, DB_URI } = process.env;

app;
app
  .use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://simple-full-stack-project.onrender.com"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  })
  .use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://simple-full-stack-project.onrender.com ",
      ],
      credentials: true,
    })
  )
  .use(express.json())
  .use(cookieParser())
  .use("/counts", countRouter)
  .use(routeNotFound)
  .use(globalErrorHandler)
  .listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose
  .connect(DB_URI)
  .then(() => console.log("connected to the db"))
  .catch((err) => console.log("error connecting to db", err));
