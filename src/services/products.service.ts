import addProductModel from '../models/products.model';
import { IProducts } from '../interfaces/IProducts';

const addProductService = async (product: IProducts) => {
  const newProduct = await addProductModel(product);
  
  return newProduct;
};

export default addProductService;