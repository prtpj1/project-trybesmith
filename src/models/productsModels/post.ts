import { ResultSetHeader } from 'mysql2';
import connection from '../../helpers/connection';
import { IProducts } from '../../interfaces/IProducts';

const addProductModel = async (product: IProducts) => {
  const { name, amount } = product;
  const [query] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products(name, amount)
    VALUES(?, ?);`,
    [name, amount],
  );

  const productQuery = {
    id: query.insertId,
    name,
    amount,
  };
  console.log('🚀 ~ query', productQuery);
  return productQuery;
};

export default addProductModel;