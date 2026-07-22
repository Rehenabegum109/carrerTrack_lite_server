import { Router } from "express";
import auth from "../../middleware/auth";
import { getDashboardStats } from "./dashboard.controller";

const dashboardRoutes = Router();

dashboardRoutes.get("/stats", auth, getDashboardStats);

export default dashboardRoutes;