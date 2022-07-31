import { Router } from 'express';
// import validateProduct from '../middlewares/validateProduct';
import addProductController from '../controllers/products.controller';

const routerProcuts = Router();

routerProcuts.post('/products', addProductController);

export default routerProcuts;