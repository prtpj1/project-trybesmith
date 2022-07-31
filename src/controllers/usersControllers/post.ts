import { Request, Response, NextFunction } from 'express';
import service from '../../services/userServices/index';
import createToken from '../../helpers/createToken';

const addUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await service.addUserService(req.body);
    const token = createToken(newUser);

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export default addUserController;