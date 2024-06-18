import { Router } from 'express';
import controller from '../controllers/ordersControllers/index';

const ordersRouter = Router();

ordersRouter.get('/', controller.getAllOrdersController);

export default ordersRouter;