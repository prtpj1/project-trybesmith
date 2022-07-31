import { Router } from 'express';
import productsRouter from './products.routes';

const routers = Router();

routers.use('/products', productsRouter);

export default routers;