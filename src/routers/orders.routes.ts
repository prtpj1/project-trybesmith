import { Router } from 'express';
import controller from '../controllers/ordersControllers/index';

const orderssRouter = Router();

orderssRouter.get('/', controller.getAllOrdersController);

export default orderssRouter;