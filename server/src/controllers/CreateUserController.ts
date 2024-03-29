import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

export async function CreateUserController(req: Request, res: Response) {
  const email = req.body.email;
  const exist = await UserModel.findOne({ email: email });

  if (exist) {
    throw new Error("User must have unique email");
  }
  try {
    const user = await UserModel.create(req.body);
    await user.save();
    res.send(user);
    console.log("New User is Created" + user);
  } catch (e) {
    res.status(400).send(e);
  }
}
