import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

const SALT_WORK_FACTOR = 10;

interface User extends Document {
  username: string;
  password: string;
  email: string;
}

class HashingError extends Error {
  log: string;
  messageDetails: { err: string };
  status: number;
  constructor(log: string, message: { err: string }, status: number) {
    super(message.err);
    this.log = log;
    this.messageDetails = message;
    this.status = status;
    Object.setPrototypeOf(this, HashingError.prototype);
  }
}

const userSchema: Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

userSchema.pre<User>("save", function (next) {
  // this prevents the users password being rehashed every time the users info is updated
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) {
      const customError = new HashingError(
        `userSchema: Error: ${err.message}`,
        { err: "Error in userSchema. We could not hash the password." },
        400,
      );
      return next(customError);
    }

    this.password = hash;
    return next();
  });
});

export default mongoose.model("Users", userSchema);
