import express from 'express';
import mongoose from 'mongoose';
import Brand from '../models/brand.model.js';
import {getBrands, createBrand} from '../controllers/brand.controller.js';

const router = express.Router();

//app verbs : get, post, put, delete
//router.get("/", getProducts); 
// router.post('/', createProduct);
// router.put('/:id', updateProduct );
// router.delete('/:id', deleteProduct);
// router.get('/:name', searchProduct);

//app verbs : get, post, put, delete
router.get("/", getBrands); 
router.post('/', createBrand);



export default router;