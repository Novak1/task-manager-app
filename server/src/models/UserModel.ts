import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: String;
  email: String;
  password: String;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate(value: string) {
      if (value.length < 6 || value.toLowerCase().includes("password")) {
        throw new Error(
          "Password must has greater then 6 chart and cant contain word password!"
        );
      }
    },
  },
});

userSchema.methods.toJSON = function (this: IUser) {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

export const UserModel = model<IUser>("User", userSchema);
