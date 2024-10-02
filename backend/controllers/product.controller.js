import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});

        res.status(200).json({success: true, data:  products});
    } catch (err) {
        console.log("error in fetching the product :" , err.message);
        res.status(404).json({success: false, message: 'No product found'});
    }
};
export const createProduct = async (req,res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: 'Product data is required'});
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};
export const updateProduct = async (req,res)=>{   
    const { id } = req.params;
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: 'Product data is required'});
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: 'Invalid product id'});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};
export const deleteProduct = async (req,res)=>{
    const { id } = req.params;
    //console.log("id : ",id);
    try {
        await Product.findByIdAndDelete(id);
        //return res.status(404).json({success: false, message: 'Product not found'});
        
        res.status(200).json({success: true, message: 'Proudct deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Proudct not found'});
    }
};

export const searchProduct = async (req,res)=>{
    const { name } = req.params;
    try {
        const products = await Product.find({name});

        res.status(200).json({success: true, data:  products});
    } catch (err) {
        console.log("error in fetching the product :" , err.message);
        res.status(404).json({success: false, message: 'No product found'});
    }
};