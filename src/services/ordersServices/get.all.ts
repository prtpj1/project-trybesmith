import model from '../../models/ordersModels/index';

const getAllOrderService = async () => {
  const orders = await model.getAllOrdersModel();
  
  return orders;
};

export default getAllOrderService;