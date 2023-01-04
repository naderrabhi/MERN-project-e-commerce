import express from 'express';
const routes = express.Router();
import productRoutes from './productRoute/product.route.js';
import userRoutes from './userRoute/user.route.js';

routes.use('/api/products', productRoutes);
routes.use('/api/users', userRoutes);

export default  routes;