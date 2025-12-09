import { userModel } from "../models/user.models.js";
import { Request, Response } from "express";

//hàm lấy các user hiện có
export const getAllUser = async (req: Request, res: Response) => {
  const allUser = await userModel.find();
  res.status(200).json(allUser);
};

//hàm tạo các user
export const createUser = async (req: Request, res: Response) => {
  try {
    const createUser = await userModel.create({
      name: "Nguyen Ba thien",
      email: "pathin2k5@gmail.com",
      password: "123456",
      age: 20,
    });
    res.status(201).json(createUser);
  } catch (error) {
    res.status(500).json({ message: "Create user failed" });
  }
};

//hàm cập nhật user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const idUpdate = req.params.id;
    const updatedUser = await userModel.findByIdAndUpdate(
      idUpdate,
      {
        email: "bathien2k5@gmail.com",
        age: 21,
      },
      {
        new: true, //trả về data sau khi update
        runValidators: true, // check validate schema
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Update user failed" });
  }
};

//hàm xoá một user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const idDelete = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete(idDelete);
    if(!deleteUser){
        res.status(404).json({message: "Not can find user delete"})
    }
    res.status(200).json({
        message : "User delete success",
        user : deleteUser
    })
  } catch (error) {
    res.status(500).json({message: "Delete user failed"});
  }
};
