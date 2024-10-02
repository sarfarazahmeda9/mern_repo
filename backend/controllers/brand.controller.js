import Brand from "../models/brand.model.js";
import mongoose from 'mongoose';

export const getBrands = async (req,res) => {
    try {
        const brands = await Brand.find({});
        res.status(200).json({sucess: true, data: brands});
    } catch(err){
        console.log("error in fetching brands :", err.message);
        res.status(404).json({success: false, message: "No brand found"});
    }
};
export const createBrand = async (req,res)=>{
    const brand = req.body;

    if(!brand.name || !brand.description ){
        return res.status(400).json({success: false, message: 'Brand data is required'});
    }

    const newBrand = new Brand(brand);
    try {
        await newBrand.save();
        res.status(201).json({success: true, data: newBrand});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};