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
    const { page, limit, order, field, keySearch } = req.body;

    // Validate data
    const options = {
      page: page || 1,
      limit: limit || 10,
    };

    let myAggregate;

    // Sort
    if (order && field) {
      const operatorSort = {};
      operatorSort[field] = order === 'ascend' ? 'asc' : 'desc';
      if (keySearch) {
        const searchRgx = new RegExp(`.*${keySearch}.*`);
        myAggregate = UserModel.aggregate([
          {
            $match: {
              $or: [
                { displayName: { $regex: searchRgx, $options: 'i' } },
                { email: { $regex: searchRgx, $options: 'i' } },
                { role: { $regex: searchRgx, $options: 'i' } },
              ],
              del_fg: false,
            },
          },
        ]).sort(operatorSort);
      } else {
        myAggregate = UserModel.aggregate([
          {
            $match: {
              del_fg: false,
            },
          },
        ]).sort(operatorSort);
      }
    } else {
      if (keySearch) {
        const searchRgx = new RegExp(`.*${keySearch}.*`);
        myAggregate = UserModel.aggregate([
          {
            $match: {
              $or: [
                { displayName: { $regex: searchRgx, $options: 'i' } },
                { email: { $regex: searchRgx, $options: 'i' } },
                { role: { $regex: searchRgx, $options: 'i' } },
              ],
              del_fg: false,
            },
          },
        ]);
      } else {
        myAggregate = UserModel.aggregate([
          {
            $match: {
              del_fg: false,
            },
          },
        ]);
      }
    }

    UserModel.aggregatePaginate(myAggregate, options)
      .then(function (results) {
        res.status(200).json(results);
      })
      .catch(function (error) {
        res.status(500).json({ error: error });
      });
  } catch (error) {
    res.status(500).json({ error: error });
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
    const checkUserExists = await UserModel.exists({
      _id: updateUser['_id'],
      del_fg: false,
    });

    if (!checkUserExists) {
      res.status(500).json({ error: err });
      return;
    }

    const resPatch = await UserModel.updateOne(
      { _id: updateUser['_id'] },
      { ...updateUser },
    );

    if (resPatch) {
      res.status(200).json(resPatch);
    } else {
      res.status(500).json({ error: err });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const updateUser = req.body;
    const checkUserExists = await UserModel.exists({
      _id: updateUser['_id'],
      del_fg: false,
    });

    if (!checkUserExists) {
      res.status(500).json({ error: err });
      return;
    }

    const resDelete = await UserModel.updateOne(
      { _id: updateUser['_id'] },
      { del_fg: true },
    );

    if (resDelete) {
      res.status(200).json(resDelete);
    } else {
      res.status(500).json({ error: err });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
