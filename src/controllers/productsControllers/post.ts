import { Request, Response, NextFunction } from 'express';
import { IProducts } from '../../interfaces/IProducts';
import service from '../../services/productsServices/index';

const addProductController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = req.body as IProducts;
    const newProduct = await service.addUserService(product);

    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export default addProductController;