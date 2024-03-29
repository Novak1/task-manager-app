import mongoose from "mongoose";

export const db = mongoose
  .connect("mongodb://127.0.0.1:27017/TSTask")
  .then(() => {
    console.log("Datebase is connected");
  })
  .catch((e) => {
    console.log(e);
  });
