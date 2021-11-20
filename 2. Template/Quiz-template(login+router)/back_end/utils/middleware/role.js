import { getUserCache } from '../cache/appCache.js';
import { ERRORS } from '../common/constant.js';
import { getUserFromToken } from '../common/firebase.js';

const Role = {
  isAdmin: async (req, res, next) => {
    try {
      const authorizationHeader = req.headers['authorization'];
      const token = authorizationHeader.split(' ')[1];
      if (token == 'null') {
        res.status(498).json({ error: ERRORS['498'] });
        return;
      }

      const userFromToken = await getUserFromToken(token);
      if (!userFromToken) {
        res.status(498).json({ error: ERRORS['498'] });
      }

      const { role } = await getUserCache(userFromToken['uid']);
      if (role === 'admin') {
        next();
      } else {
        res.status(498).json({ error: ERRORS['498'] });
      }
    } catch (error) {
      console.log(`error`, error);
      res.status(498).json({ error: ERRORS['498'] });
    }
  },
  isPlus: async (req, res, next) => {
    try {
      const authorizationHeader = req.headers['authorization'];
      const token = authorizationHeader.split(' ')[1];
      if (token == 'null') {
        res.status(498).json({ error: ERRORS['498'] });
        return;
      }

      const userFromToken = await getUserFromToken(token);
      if (!userFromToken) {
        res.status(498).json({ error: ERRORS['498'] });
      }

      const { role } = await getUserCache(userFromToken['uid']);
      if (role === 'admin' || role === 'plus') {
        next();
      } else {
        res.status(498).json({ error: ERRORS['498'] });
      }
    } catch (error) {
      console.log(`error`, error);
      res.status(498).json({ error: ERRORS['498'] });
    }
  },
  isNormal: async (req, res, next) => {
    try {
      const authorizationHeader = req.headers['authorization'];
      const token = authorizationHeader.split(' ')[1];
      if (token == 'null') {
        res.status(498).json({ error: ERRORS['498'] });
        return;
      }

      const userFromToken = await getUserFromToken(token);
      if (!userFromToken) {
        res.status(498).json({ error: ERRORS['498'] });
      }

      const { role } = await getUserCache(userFromToken['uid']);
      if (role === 'admin' || role === 'plus' || role === 'normal') {
        next();
      } else {
        res.status(498).json({ error: ERRORS['498'] });
      }
    } catch (error) {
      console.log(`error`, error);
      res.status(498).json({ error: ERRORS['498'] });
    }
  },
};

export default Role;
