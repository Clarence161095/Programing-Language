import TokenVerify from '../middleware/TokenVerifyMiddleware.js';
import homeRouter from './HomeRouter.js';

const routerConfig = (app) => {
  app.use('/home', TokenVerify.ok, homeRouter);
};

export default routerConfig;
