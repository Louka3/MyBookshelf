import { Request, Response, NextFunction } from "express";
import { libraryService } from "../services/libraryService";

export const libraryController = {
  // initialize user library on signup
  async initializeLibrary(req: Request, _res: Response, next: NextFunction) {
    const userId: string = req.body._id;
    libraryService.createLibrary(userId);
    next();
  },
};
