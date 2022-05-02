import { checkLogin } from '../controllers/login.js';
import Role from '../utils/middleware/role.js';
import userRouter from './users.js';

const routerConfig = (app) => {
  app.use('/login', checkLogin);
  app.use('/users', Role.isAdmin, userRouter);
};

export default routerConfig;
