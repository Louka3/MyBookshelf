import mongoose, { Schema, Document } from "mongoose";
import { BookData } from "../types/bookTypes";

// Define the schema for BookData
const BookDataSchema: Schema = new mongoose.Schema({
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

// Define the interface for Library
interface Library extends Document {
  username: string;
  books: BookData[];
}

// Define the schema for Library
const librarySchema: Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  books: [BookDataSchema], // Reference the databaseBookSchema
});

export default mongoose.model<Library>("Library", librarySchema);
