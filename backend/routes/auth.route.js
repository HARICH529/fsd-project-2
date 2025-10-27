import express from "express";
import {
  logOutController,
  loginController,
  signupController,
  adminLoginController,
  createAdminController,
} from "../controllers/auth.controller.js";

const router = express.Router();

//signup route
router.post("/signup", signupController);
//login route
router.post("/login", loginController);
//logout route
router.get("/logout", logOutController);
//admin login route
router.post("/admin/login", adminLoginController);
//create admin route
router.post("/admin/create", createAdminController);

export default router;
