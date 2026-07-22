import express, { Application, Request, Response } from "express";
import cors from "cors";
import authRoutes from "./app/modules/auth/auth.route";
import applicationRoutes from "./app/modules/applications/application.route";
import dashboardRoutes from "./app/modules/dashboard/dashboard.route";
import cookieParser from "cookie-parser";


const app: Application = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "CareerTrack Lite API is running 🚀",
  });
});
app.use("/api", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;