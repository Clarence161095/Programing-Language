import { UserModel } from '../models/UserModel.js';

export const checkLoginUser = async (user) => {
  try {
    const userFromDB = await UserModel.exists({
      uid: user['uid'],
      del_fg: false,
    });

    if (!userFromDB) {
      const newUser = await UserModel.create({ ...user, role: 'normal' });
      return newUser;
    }

    return await UserModel.updateOne({ uid: user['uid'] }, { ...user });
  } catch (error) {
    console.log(`error controllers/users/checkLogin`, error);
    return;
  }
};

export const getUser = async (req, res) => {
  try {
    const userFromDB = await UserModel.find();

    res.status(200).json(userFromDB);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const postUser = async (req, res) => {
  try {
    const user = req.body;

    const userModel = new UserModel(user);
    await userModel.save();

    res.status(200).json(userModel);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = req.body;

    const post = await UserModel.findOneAndUpdate(
      { _id: updateUser._id },
      updateUser,
      { new: true },
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
