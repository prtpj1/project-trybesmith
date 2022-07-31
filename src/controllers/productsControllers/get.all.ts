import { Request, Response, NextFunction } from 'express';
import service from '../../services/productsServices/index';

const getAllProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await service.getAllProductService();

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export default getAllProductController;