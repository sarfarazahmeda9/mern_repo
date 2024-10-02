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
const __dirname = path.resolve();

app.use(express.json()); // to parse json data in the request body

//path.join(__dirname, '../frontend/build');
//app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use("/api/products", productRoutes);

app.use("/api/brands", brandRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}
else{   
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

app.listen(PORT,()=>{
    connectDB();
    console.log('Server is running on port',PORT);
    console.log("http://localhost:"+ PORT + "/");
});
