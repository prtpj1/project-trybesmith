import addUserModel from '../../models/usersModels/post';
import { IUsers } from '../../interfaces/IUsers';

const addUserService = async (user: IUsers) => {
  const newUser = await addUserModel(user);
    
  return newUser;
};

export default addUserService;