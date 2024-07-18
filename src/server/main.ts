import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.get("", (_req, res) => {
  res.send("yes");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
