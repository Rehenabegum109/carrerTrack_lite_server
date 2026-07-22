import { prisma } from "../../../lib/prisma";
import { ApplicationStatus } from "../../../../generated/prisma";

export const getDashboardStats = async (userId: string) => {
  const totalApplications = await prisma.application.count({
    where: { userId },
  });

  const applied = await prisma.application.count({
    where: {
      userId,
      status: ApplicationStatus.APPLIED,
    },
  });

  const reviewing = await prisma.application.count({
    where: {
      userId,
      status: ApplicationStatus.REVIEWING,
    },
  });

  const interview = await prisma.application.count({
    where: {
      userId,
      status: ApplicationStatus.INTERVIEW,
    },
  });

  const offer = await prisma.application.count({
    where: {
      userId,
      status: ApplicationStatus.OFFER,
    },
  });

  const rejected = await prisma.application.count({
    where: {
      userId,
      status: ApplicationStatus.REJECTED,
    },
  });

  return {
    totalApplications,
    applied,
    reviewing,
    interview,
    offer,
    rejected,
  };
};       