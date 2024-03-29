import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export async function DeleteUserController(req: Request, res: Response) {
  const _id = req.params.userId;
  const isExist = await UserModel.findById({ _id: _id });
  if (!isExist) {
    throw new Error("User doesn't exist");
  }
  try {
    const user = await UserModel.findByIdAndDelete({ _id: _id });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}
