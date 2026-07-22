import { z } from "zod";

export const createApplicationValidationSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  status: z.string().optional(),
  jobType: z.string().min(1, "Job type is required"),
  location: z.string().min(1, "Location is required"),
  salary: z.string().optional(),
  notes: z.string().optional(),
});