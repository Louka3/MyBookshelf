import { Document, Model, UpdateQuery } from "mongoose";
// import Users from "../models/userModel";
// import { Library } from "../models/libraryModel";
import { UserProjection } from "../types/userTypes";

export const dbService = {
  createEntry<T extends Document>(
    model: Model<T>,
    data: Partial<T>,
  ): Promise<T> {
    return model.create(data);
  },
  updateEntryById<T extends Document>(
    model: Model<T>,
    data: UpdateQuery<T>,
    _id: string,
  ): Promise<T | null> {
    return model
      .findByIdAndUpdate(_id, data, {
        returnDocument: "after",
      })
      .exec();
  },
  getEntryById<T extends Document>(
    model: Model<T>,
    _id: string,
  ): Promise<T | null> {
    return model.findById({ _id: _id });
  },
  getListOfEntries<T extends Document>(
    model: Model<T>,
    projection: UserProjection,
  ): Promise<T[]> {
    return model.find({}, projection).exec();
  },
  deleteEntryById<T extends Document>(
    model: Model<T>,
    _id: string,
    projection: UserProjection,
  ): Promise<T | null> {
    return model
      .findOneAndDelete({ _id: _id }, { projection: projection })
      .exec();
  },
};
