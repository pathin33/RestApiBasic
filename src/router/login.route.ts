import express from "express";
import { Router } from "express";
import { checkloginController } from "../controller/login.controller.js";
const router: Router = express.Router();

router.post("/login",checkloginController);

export default router;