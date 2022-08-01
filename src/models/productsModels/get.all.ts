import { ResultSetHeader } from 'mysql2';
import connection from '../connection';

const getAllProductModel = async () => {
  // const { name, amount } = product;
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [data] = await connection.execute<ResultSetHeader>(query);

  return data;
};

export default getAllProductModel;