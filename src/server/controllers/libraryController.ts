import { Request, Response, NextFunction } from "express";
import { libraryService } from "../services/libraryService";

export const libraryController = {
  // initialize user library on signup
  async initializeLibrary(req: Request, _res: Response, next: NextFunction) {
    const userId: string = req.body._id;
    libraryService.createLibrary(userId);
    next();
  },
  // delete a library. This can be used if a user deletes their account maybe?
  async deleteLibrary(req: Request, res: Response, next: NextFunction) {
    const userId: string = req.body._id;
    res.locals.success = libraryService.deleteLibrary(userId);
    next();
  },
  // obtain the list of books inside of a library
  async obtainLibrary(req: Request, res: Response, next: NextFunction) {
    const userId: string = req.body._id;
    res.locals.list = libraryService.getList(userId);
  },
};
