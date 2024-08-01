import User from "../models/userModel";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";

export const userController = {
  // create a user
  async createUser(req: Request, res: Response, next: NextFunction) {
    const { username, password, email } = req.body;
    User.create({ username: username, password: password, email: email });
    next();
  },

  // update a user
  async updateUser(req: Request, res: Response, next: NextFunction) {
    next();
  },
  // delete a user

  // get a user

  // get all users
};
