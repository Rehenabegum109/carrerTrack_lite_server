/*
  Warnings:

  - The `status` column on the `Application` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'REVIEWING', 'INTERVIEW', 'OFFER', 'REJECTED');

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "deadline" TIMESTAMP(3),
ADD COLUMN     "jobType" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "salary" TEXT,
ALTER COLUMN "location" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'APPLIED';
