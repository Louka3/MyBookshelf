import Users from "../models/userModel";
// import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";

export const userController = {
  // create a user
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { username, password, email } = req.body;
    await Users.create({
      username: username,
      password: password,
      email: email,
    }).then((result) => {
      res.locals.user = result;
    });
    next();
  },

  // update a user
  async updateUser(req: Request, res: Response, next: NextFunction) {
    next();
  },
  // delete a user

  // get a user
  test(req: Request, res: Response, next: NextFunction) {
    console.log("hello");
    next();
  },
  // get all users
};
