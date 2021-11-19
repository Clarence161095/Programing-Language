import { UserModel } from "../../models/UserModel.js";

const CurrentUser = (
  function () {
    const data = {};
    return {
      async getUser(user) {
        try {
          if (typeof user !== "object" || !user['uid']) {
            return;
          }

          if (!data[user['uid']]) {
            const userFromDB = await UserModel.findOne({
              uid: user['uid'],
              del_fg: false
            }).exec();

            if (!userFromDB) {
              return;
            }

            data[user['uid']] = {
              role: userFromDB['role']
            };
          }

          return data[user['uid']];
        } catch (error) {
          console.log("🚀 users.js ~ line 27 ~ getUser ~ error", error)
          return;
        }
      },
      async setUser(user) {
        try {
          if (typeof user !== "object" || !user['uid']) {
            return;
          }

          const userFromDB = await UserModel.exists({
            uid: user['uid'],
            del_fg: false
          });

          if (!userFromDB) {
            const newUser = await UserModel.create({ ...user, role: 'normal' })
            await this.getUser(user);
            return newUser;
          }

          await this.getUser(user);
          return await UserModel.updateOne({ uid: user['uid'] }, { ...user })
        } catch (error) {
          console.log("🚀 ~ file: users.js ~ line 49 ~ setUser ~ error", error)
          return;
        }
      },
      getAllUsers() {
        return data;
      }
    }
  }
)();

export default CurrentUser;