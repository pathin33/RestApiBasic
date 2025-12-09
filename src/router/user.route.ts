import express from "express";
import { Router } from "express";
import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";
const router: Router = express.Router();

router.get("/users", getAllUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
