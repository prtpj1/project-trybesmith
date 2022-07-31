import { Router } from 'express';
import controller from '../controllers/usersControllers/index';

const productsRouter = Router();

productsRouter.post('/', controller.addUserController);

export default productsRouter;