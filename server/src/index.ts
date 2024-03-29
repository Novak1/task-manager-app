import express from "express";
import routerUser from "./routers/UserRouter";
import { db } from "../config/db";

db;
const app: express.Application = express();
const port: number = 3000;

app.use(express.json());
app.use(routerUser);

app.listen(port, () => {
  console.log(`App work on ${port}`);
});