import mongoose, { Schema, Document } from "mongoose";
import { BookData } from "../types/bookTypes";

// Define the schema for BookData
const bookSchema: Schema = new Schema({
  voluemId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
    default: "",
  },
});

const Book = mongoose.model<BookData>("book", bookSchema);

// Define the interface for Library
interface Library extends Document {
  userId: string;
  books: mongoose.Schema.Types.ObjectId[];
}

// Define the schema for Library
const librarySchema: Schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "book",
    },
  ],
});

const Library = mongoose.model<Library>("Library", librarySchema);

export { Book, Library };
