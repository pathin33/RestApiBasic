import { Document } from "mongoose";

export default interface typeUser extends Document {
  name: string;
  email: string;
  password: string;
  age?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
