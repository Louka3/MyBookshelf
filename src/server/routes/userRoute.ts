import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const router = express.Router();

router.post(
  "/signup",
  userController.createUser,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.user);
  },
);

export default router;
