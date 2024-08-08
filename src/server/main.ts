import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";

dotenv.config();
export const app = express();
app.use(express.json());
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@mybookshelf-cluster.oz0pux5.mongodb.net/MyBookshelf?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

app.use("/api/user", userRouter);

app.get("/hello", (_req, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.post("/test", (_req, res) => {
  res.sendStatus(200);
});
ViteExpress.listen(app, process.env.PORT, () =>
  console.log("Server is listening on port 3000..."),
);
