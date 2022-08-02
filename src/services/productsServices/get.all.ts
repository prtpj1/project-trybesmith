import model from '../../models/productsModels/index';

const getAllProductService = async () => {
  const products = await model.getAllProductModel();
  
  return products;
};

export default getAllProductService;