import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export async function getUsersController(req: Request, res: Response) {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send(error);
  }
}
