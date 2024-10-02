import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { getProducts, createProduct, updateProduct, deleteProduct, searchProduct } from '../controllers/product.controller.js';

import {getBrands} from '../controllers/brand.controller.js';

const router = express.Router();

//app verbs : get, post, put, delete
router.get("/", getProducts); 
router.post('/', createProduct);
router.put('/:id', updateProduct );
router.delete('/:id', deleteProduct);
router.get('/:name', searchProduct);

//app verbs : get, post, put, delete
router.get("/", getBrands); 


export default router;