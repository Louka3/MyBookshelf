import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/test", userController.test, (_req: Request, res: Response) => {
  console.log("finished test route");
  res.status(200).end();
});

userRouter.post(
  "/signup",
  userController.createUser,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.user);
  },
);

export default userRouter;
