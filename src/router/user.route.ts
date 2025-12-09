import express from "express";
import { Router } from "express";
import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";
const router: Router = express.Router();

router.get("/user", getAllUser);

router.post("/createUser", createUser);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

export default router;
