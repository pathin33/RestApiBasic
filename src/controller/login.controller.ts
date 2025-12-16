import { userModel } from "../models/user.models.js";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

export const checkloginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    //tim user co email trung khop voi email dc gui len server ko
    const user = await userModel.findOne({ email: email });
    //tra ve 1 user khop dau tien
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid password or email"
      })
    }
    //so sanh mat khau voi mk hash trong db cua user
    const passwordDb = await bcrypt.compare(password, user.password)
    if (!passwordDb) {
      return res.status(404).json({
        success: false,
        message: "Invalid password or email"
      })
    }
    res.status(200).json({
      success: true,
      message: "Login success",
      user: {
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};  