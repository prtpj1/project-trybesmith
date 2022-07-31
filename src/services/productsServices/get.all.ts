import model from '../../models/productsModels/index';

const addProductService = async () => {
  const products = await model.getAllProductModel();
  
  return products;
};

export default addProductService;