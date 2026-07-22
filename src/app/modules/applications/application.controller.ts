import { Request, Response } from "express";

import * as ApplicationService from "./application.service";
export const createApplication = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;

    const result = await ApplicationService.createApplication(
      user.id,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Application created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyApplications = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;

    const result = await ApplicationService.getMyApplications(user.id);

    res.status(200).json({
      success: true,
      message: "Applications retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleApplication = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;

    const id = req.params.id as string;

const result = await ApplicationService.getSingleApplication(
  id,
  user.id
);
    res.status(200).json({
      success: true,
      message: "Application retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};


export const updateApplication = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;

    const id = req.params.id as string;

    const result = await ApplicationService.updateApplication(
      id,
      user.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteApplication = async (
  req: Request,
  res: Response
) => {
  try {
    const user = (req as any).user;
    const id = req.params.id as string;

    await ApplicationService.deleteApplication(id, user.id);

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};