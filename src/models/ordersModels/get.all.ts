import { IOrders } from '../../interfaces/IOrders';
import connection from '../connection';

const getAllOrdersModel = async (): Promise<IOrders[]> => {
  const query = `SELECT
      Trybesmith.Orders.id,
      Trybesmith.Orders.userId,
      JSON_ARRAYAGG(Trybesmith.Products.id) as productsIds
    FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products
        ON Trybesmith.Orders.id = Trybesmith.Products.orderId
      GROUP BY Trybesmith.Orders.id
      ORDER BY Trybesmith.Orders.userId;`;

  const [data] = await connection.execute(query);

  return data as IOrders[];
};

export default getAllOrdersModel;