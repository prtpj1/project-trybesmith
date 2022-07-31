import { Request, Response, NextFunction } from 'express';
import ErrorAPI from './errorAPI';

const errorMiddleware = (err: ErrorAPI, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err;

  return res.status(status).json({ message });

  next();
};

export default errorMiddleware;
