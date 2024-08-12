import Users from "../models/userModel";

export const userService = {
  async createUser(user: any) {
    let userData: any;
    const { username, password, email } = user as {
      username: string;
      password: string;
      email: string;
    };
    await Users.create({
      username: username,
      password: password,
      email: email,
    }).then((data) => {
      userData = {
        username: data.username,
        email: data.email,
        id: data._id,
      };
    });
    return userData;
  },

  async updateUser(info: any) {
    let userData: any;
    const { _id } = info as { _id: string };

    await Users.findByIdAndUpdate({ _id: _id }, info, {
      returnDocument: "after",
    }).then((data) => {
      userData = data;
    });
    return userData;
  },

  async deleteUser(user: any) {
    let userData: any;
    const { _id } = user as {
      _id: string;
    };
    await Users.findOneAndDelete(
      { _id: _id },
      { projection: { _id: 0, username: 1 } },
    ).then((data) => (userData = data));
    return userData;
  },

  async getUserData(_id: string) {
    let userData: any;
    await Users.findById({ _id: _id }, { password: 1 }).then((data) => {
      userData = data;
    });
    return userData;
  },

  async getUsers() {},
};
