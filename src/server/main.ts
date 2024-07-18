import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const app = express();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@mybookshelf-cluster.oz0pux5.mongodb.net/?retryWrites=true&w=majority`;

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

app.get("/hello", (_req, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.post("/test", (_req, res) => {
  res.sendStatus(200);
});
ViteExpress.listen(app, process.env.PORT, () =>
  console.log("Server is listening on port 3000..."),
);
