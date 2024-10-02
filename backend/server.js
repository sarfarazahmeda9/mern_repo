//import express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';
import brandRoutes from './routes/brand.route.js';
import path from 'path';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse json data in the request body

//path.join(__dirname, '../frontend/build');
app.use("/api/products", productRoutes);

app.use("/api/brands", brandRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log('Server is running on port',PORT);
    console.log("http://localhost:"+ PORT + "/");
});
