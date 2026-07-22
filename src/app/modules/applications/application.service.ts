import { prisma } from "../../../lib/prisma";
import { IApplication } from "./application.interface";


export const createApplication = async (
  userId: string,
  payload: IApplication
) => {
  const application = await prisma.application.create({
    data: {
      ...payload,
      userId,
    },
  });

  return application;
};

export const getMyApplications = async (userId: string) => {
  const applications = await prisma.application.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return applications;
};

export const getSingleApplication = async (
  id: string,
  userId: string
) => {
  const application = await prisma.application.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  return application;
};


export const updateApplication = async (
  id: string,
  userId: string,
  payload: Partial<IApplication>
) => {
  const application = await prisma.application.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  const result = await prisma.application.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const deleteApplication = async (
  id: string,
  userId: string
) => {
  const application = await prisma.application.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  await prisma.application.delete({
    where: {
      id,
    },
  });

  return null;
};