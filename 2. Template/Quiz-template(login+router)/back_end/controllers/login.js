import CurrentUser from "../utils/cache/users.js";
import { ERRORS } from "../utils/common/constant.js";
import { getUserFromToken } from "../utils/common/firebase.js";

export const checkLogin = async (req, res) => {
  try {
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const userFromToken = await getUserFromToken(token)
    if (!userFromToken) {
      res.status(498).json({ error: ERRORS[498] });
      return;
    }
    if (userFromToken['uid'] && userFromToken['uid'] === req.body['uid']) {
      await CurrentUser.setUser({
        uid: userFromToken['uid'],
        displayName: userFromToken['name'] || 'Anonymous',
        email: userFromToken['email'] || 'Anonymous Email',
      })
    }

    res.status(200).json(await CurrentUser.getUser(userFromToken));
  } catch (err) {
    res.status(500).json({ error: err });
  }
}