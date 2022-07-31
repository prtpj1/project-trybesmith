import model from '../../models/productsModels/index';
import { IProducts } from '../../interfaces/IProducts';

const addProductService = async (product: IProducts) => {
  const newProduct = await model.addProductModel(product);
  
  return newProduct;
};

export default addProductService;