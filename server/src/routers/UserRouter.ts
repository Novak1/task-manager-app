import express from "express";
import cors from "cors";
import { CreateUserController } from "../controllers/CreateUserController";
import { getUsersController } from "../controllers/GetUsersController";
import { GetUserController } from "../controllers/GetUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";

const routerUser = express.Router();
routerUser.use(cors({ origin: "*" }));

routerUser.post("/user", CreateUserController);
routerUser.get("/user", getUsersController);
routerUser.get("/user/:userId", GetUserController); // toDo Reading own profil with Auth.
routerUser.delete("/user/:userId", DeleteUserController); // toDo Reading own profil with Auth.

export default routerUser;
