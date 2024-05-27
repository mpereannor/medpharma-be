/*
  Warnings:

  - Added the required column `medicalCondition` to the `Consultation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consultation" ADD COLUMN     "medicalCondition" TEXT NOT NULL;
