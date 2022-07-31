import Jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { IUsers } from '../interfaces/IUsers';

const JWT_SECRET: Secret = 'sevocenaocontareunaoconto';
const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '365d',
};

const createToken = (user: IUsers) => {
  const newToken = Jwt.sign({ data: user }, JWT_SECRET, jwtConfig);

  return newToken;
};

export default createToken;