import { Request, Response, NextFunction } from 'express';
import { IProducts } from '../../interfaces/IProducts';
import service from '../../services/productsServices/index';

const addProductController = async (req: Request, res: Response, _next: NextFunction) => {
  const product = req.body as IProducts;
  const newProduct = await service.addProductService(product);

  return res.status(201).json(newProduct);
};

export default addProductController;