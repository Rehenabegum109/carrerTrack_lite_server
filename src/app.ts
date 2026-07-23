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
    origin: ["http://localhost:5173","https://carrer-track-lite-client.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health",(req,res)=>{
  res.json({
    success:true,
    message:"API healthy 🚀"
  });
});
app.use("/api", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;