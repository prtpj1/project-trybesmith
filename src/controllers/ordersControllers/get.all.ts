import { Request, Response, NextFunction } from 'express';
import service from '../../services/ordersServices/index';

const getAllOrdersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await service.getAllOrderService();

    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export default getAllOrdersController;