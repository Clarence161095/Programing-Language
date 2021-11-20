import NodeCache from 'node-cache';
import { UserModel } from '../../models/UserModel.js';

const AppCache = new NodeCache({ stdTTL: 100, checkperiod: 1200 });

export const getUserCache = async (uid) => {
  try {
    if (typeof uid !== 'string') return;

    if (!AppCache.get(uid)) {
      const userFromDB = await UserModel.findOne({
        uid: uid,
        del_fg: false,
      }).exec();

      if (!userFromDB) return;

      AppCache.set(uid, { role: userFromDB['role'] });
    }

    return AppCache.get(uid);
  } catch (error) {
    console.log(`error getUser (Cache): `, error);
    return;
  }
};

export default AppCache;
