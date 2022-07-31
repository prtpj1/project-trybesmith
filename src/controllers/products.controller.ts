import { Request, Response, NextFunction } from 'express';
import { IProducts } from '../interfaces/IProducts';
import addProductService from '../services/products.service';

const addProductController = async (req: Request, res: Response, _next: NextFunction) => {
  const product = req.body as IProducts;
  const newProduct = await addProductService(product);

  return res.status(201).json(newProduct);
};

export default addProductController;