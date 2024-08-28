import { Book, Library } from "../models/libraryModel";

export const libraryService = {
  async createLibrary(userId: string) {
    await Library.create({ userId: userId, books: [] }).then((data) => {
      console.log(data);
      console.log("library created");
    });
    return;
  },
  async deleteLibrary(userId: string) {
    let response: any;
    await Library.deleteOne({ _id: userId }).then((data) => (response = data));
    return response;
  },
  async getBookList(userId: string) {
    let list: [] | any;
    await Library.findById({ _id: userId }).then((data) => {
      list = data?.books;
    });
    return list;
  },
};
