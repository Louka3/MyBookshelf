import express, { Request, Response, NextFunction } from "express";
import { libraryController } from "../controllers/libraryController";

const router = express.Router();
// route to initialize library for a user
router.get(
  "/initialize",
  libraryController.initializeLibrary,
  (_req: Request, res: Response) => {
    res.status(200).end();
  },
);
// route to remove a library
router.delete(
  "/delete",
  libraryController.deleteLibrary,
  (_req: Request, res: Response) => {
    res.status(200).json(res.locals.success);
  },
);

// route for getting a list of books from the api

// route for getting book data from the api

// route for getting all books from the db

// route for getting a single book from the db

export default router;
