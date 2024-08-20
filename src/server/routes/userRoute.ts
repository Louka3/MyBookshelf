import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(
  "/username",
  userController.getUsername,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.username);
  },
);

userRouter.get(
  "/users",
  userController.getUsers,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.userList);
  },
);

userRouter.post(
  "/signup",
  userController.createUser,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.userData);
  },
);

userRouter.patch(
  "/update",
  userController.updateUser,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.updatedData);
  },
);

userRouter.delete(
  "/",
  userController.deleteUser,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.deletedUser);
  },
);

export default userRouter;
