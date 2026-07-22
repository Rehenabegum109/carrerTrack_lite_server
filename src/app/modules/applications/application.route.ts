import { Router } from "express";
import auth from "../../middleware/auth";
import { createApplication, deleteApplication, getMyApplications, getSingleApplication, updateApplication } from "./application.controller";


const applicationRoutes = Router();
applicationRoutes.post("/", auth, createApplication);
applicationRoutes.get("/", auth, getMyApplications);
applicationRoutes.get("/:id", auth, getSingleApplication);
applicationRoutes.patch("/:id", auth, updateApplication);
applicationRoutes.delete("/:id", auth, deleteApplication);
export default applicationRoutes;
