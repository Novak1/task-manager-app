import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export async function GetUserController(req: Request, res: Response) {
  const userId = req.params.userId;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User doesn't exist");
    }
    res.send(user);
  } catch (e) {
    res.status(404).send(e);
  }
}
