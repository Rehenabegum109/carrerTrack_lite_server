import { Request, Response } from "express";
import * as DashboardService from "./dashboard.service";

export const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;

    const result = await DashboardService.getDashboardStats(user.id);

    res.status(200).json({
      success: true,
      message: "Dashboard stats retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};