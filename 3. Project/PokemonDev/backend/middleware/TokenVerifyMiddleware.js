import { ERRORS } from '../common/constant.js';

const TokenVerify = {
  ok: async (req, res, next) => {
    try {
      console.log(`req`, req.body)
      if (req.body) {
        next();
      } else {
        res.status(498).json({ error: ERRORS['400'] });
      }
    } catch (error) {
      console.log(`error`, error);
      res.status(498).json({ error: ERRORS['400'] });
    }
  }
};

export default TokenVerify;
