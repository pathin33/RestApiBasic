import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const URIDB = process.env.URIDB;
    if (!URIDB) {
      throw new Error("Connection string is invalid");
    }
    await mongoose.connect(URIDB);
    console.log("Connect database success");
  } catch (error) {
    console.error("Connect error", error);
  }
};
export default connectDB;
