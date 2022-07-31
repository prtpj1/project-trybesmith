import { Router } from 'express';
import controller from '../controllers/productsControllers/index';

const productsRouter = Router();

productsRouter.post('/', controller.addProductController);

export default productsRouter;