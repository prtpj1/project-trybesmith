import { Request, Response } from 'express';
import ErrorAPI from './errorAPI';

const errorMiddleware = (err: ErrorAPI, _req: Request, res: Response) => {
  const { status, message } = err;

  return res.status(status).json({ message });
};

export default errorMiddleware;
