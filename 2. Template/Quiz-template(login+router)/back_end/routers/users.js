import express from 'express';
import { getUser, postUser, updateUser } from '../controllers/users.js';

const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.post('/', postUser)
userRouter.patch('/', updateUser);

export default userRouter;