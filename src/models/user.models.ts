import { Schema, model } from "mongoose";
import typeUser from "./type.models.js";

const userSchema = new Schema<typeUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    age: { type: Number, default: 18 },
  },
  { timestamps: true }
);

export const userModel = model("User",userSchema);