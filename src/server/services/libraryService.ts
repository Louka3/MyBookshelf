import { Book, Library } from "../models/libraryModel";

export const libraryService = {
  async createLibrary(userId: string) {
    await Library.create({ userId: userId, books: [] }).then((_data) =>
      console.log("library created"),
    );
    return;
  },
};
