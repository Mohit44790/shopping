import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/User.js"
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config({});

const PORT = process.env.PORT || 8000;
const app =express();
app.use(express.json());
app.use(cors())

//api

app.use("/api/user",userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(PORT,(req,res)=>{

    console.log(`server running Port ${PORT}`)
    ConnectDB();
})