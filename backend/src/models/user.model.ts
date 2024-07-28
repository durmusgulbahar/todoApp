import mongoose from "mongoose";
import IUser from "../interfaces/IUser";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
// IUser data'nın IUser tipinde olmasına yarıyor. IUser tipinde olmayan bir veri yazılıp okunamıyor.  
const User = mongoose.model<IUser>("User", userSchema);
export default User;
