import { ResultSetHeader } from 'mysql2';
import connection from '../../helpers/connection';
import { IUsers } from '../../interfaces/IUsers';

const addUserModel = async (user: IUsers) => {
  const { username, classe, level, password } = user;
  const [query] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users(username, classe, level, password)
    VALUES(?, ?, ?, ?);`,
    [username, classe, level, password],
  );

  const userQuery = {
    id: query.insertId,
    username,
    classe,
    level,
    password,
  };
  return userQuery;
};

export default addUserModel;