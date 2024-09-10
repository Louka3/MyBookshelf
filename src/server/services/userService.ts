import Users from "../models/userModel";
import { dbService } from "./dbService";

export const userService = {
  async createUser(user: {
    username: string;
    password: string;
    email: string;
  }) {
    let userData: any;

    try {
      userData = await dbService.createEntry(Users, user);
      return {
        username: userData.username,
        email: userData.email,
        _id: userData._id,
      };
    } catch (err: any) {
      throw new Error(`Error message: ${err.message}`);
    }
  },

  async updateUser(info: any) {
    const _id = info._id;
    delete info._id;
    const userData = await dbService.updateEntryById(Users, info, _id);
    console.log("userData:", userData);
    return userData;
  },

  async deleteUser(user: any) {
    let userData: any;
    const { _id } = user as {
      _id: string;
    };
    userData = await dbService.deleteEntryById(Users, _id, {
      _id: 0,
      username: 1,
    });
    return userData;
  },

  async getUserData(_id: string) {
    let userData: any;
    userData = await dbService.getEntryById(Users, _id);
    return userData;
  },

  async getUsers() {
    let userList;
    userList = await dbService.getListOfEntries(Users, {
      _id: 1,
      username: 1,
      email: 1,
    });
    return userList;
  },
};
