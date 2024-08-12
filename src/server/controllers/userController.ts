import Users from "../models/userModel";
// import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import { userService } from "../services/userService";
import bcrypt from "bcryptjs";

const SALT_WORK_FACTOR = 10;

interface updateInfo {
  _id: string | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
}

export const userController = {
  // create a user
  async createUser(req: Request, res: Response, next: NextFunction) {
    res.locals.userData = await userService.createUser(req.body);
    next();
  },

  // update a user
  async updateUser(req: Request, res: Response, next: NextFunction) {
    const info: updateInfo = {
      _id: req.body._id,
      username: req.body.username ? req.body.username : undefined,
      password: req.body.password ? req.body.password : undefined,
      email: req.body.email ? req.body.email : undefined,
    };
    const arr: (keyof updateInfo)[] = ["username", "password", "email"];
    for (const key of arr) {
      if (info[key] === undefined) {
        delete info[key];
      }
    }
    if (info["password"] !== undefined) {
      try {
        const hash = await bcrypt.hash(info["password"], SALT_WORK_FACTOR);
        console.log(hash);
        info["password"] = hash;
        console.log(info["password"]);
      } catch (err) {
        return next(err);
      }
    }

    const updatedData = await userService.updateUser(info);
    res.locals.updatedData = updatedData;
    console.log(info);
    next();
  },

  // delete a user
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    res.locals.deletedUser = await userService.deleteUser(req.body);
    next();
  },

  // get a user
  async getUsername(req: Request, res: Response, next: NextFunction) {
    let userData: any = await userService.getUserData(req.body._id);
    res.locals.username = userData;
    next();
  },

  // get all users
  async getUsers(_req: Request, res: Response, next: NextFunction) {
    await Users.find({}, { _id: 1, username: 1 }).then((data) => {
      res.locals.usernames = data;
    });
    next();
  },
};
