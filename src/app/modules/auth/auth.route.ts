import { Router } from "express";
import { getMe, login, logout, register } from "./auth.controller";
import auth from "../../middleware/auth";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post(
  "/logout",
  logout
);
authRoutes.get("/me", auth, getMe);
export default authRoutes;