import express from 'express';
import {
  deleteUser,
  getUser,
  postUser,
  updateUser,
} from '../controllers/users.js';

const userRouter = express.Router();

userRouter.post('/getUser', getUser);
userRouter.post('/', postUser);
userRouter.patch('/', updateUser);
userRouter.patch('/deleteUser', deleteUser);

export default userRouter;
