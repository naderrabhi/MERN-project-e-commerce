import express from 'express';
const router = express.Router();
import { getProductById, getProducts } from '../../controllers/product.controller.js';


// @route    GET /api/products
router.get('/', getProducts);

// @route    GET /api/products/:id
router.get('/:id', getProductById);

export default router;
