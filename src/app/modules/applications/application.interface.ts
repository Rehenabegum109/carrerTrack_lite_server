import { ApplicationStatus } from "../../../../generated/prisma";


export interface IApplication {
  company: string;
  position: string;
  status?: ApplicationStatus;
  jobType?: string;
  location?: string;
  salary?: string;
  deadline?: Date;
  notes?: string;
}