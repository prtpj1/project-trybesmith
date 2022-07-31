import { Router } from 'express';
import productsRouter from './products.routes';
import usersRouter from './users.routes';

const routers = Router();

routers.use('/products', productsRouter);
routers.use('/users', usersRouter);

export default routers;