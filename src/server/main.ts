import express from "express";
import ViteExpress from "vite-express";

export const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.post("/test", (_req, res) => {
  res.sendStatus(200);
});
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
