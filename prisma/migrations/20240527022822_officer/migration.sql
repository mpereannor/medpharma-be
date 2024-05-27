/*
  Warnings:

  - The values [IN_PATIENT,OUT_PATIENT] on the enum `ConsultationType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `medicalCondition` on the `Consultation` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `Consultation` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `patient` to the `Consultation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ConsultationType_new" AS ENUM ('INPATIENT', 'OUTPATIENT', 'REMOTELY');
ALTER TABLE "Consultation" ALTER COLUMN "consultationType" TYPE "ConsultationType_new" USING ("consultationType"::text::"ConsultationType_new");
ALTER TYPE "ConsultationType" RENAME TO "ConsultationType_old";
ALTER TYPE "ConsultationType_new" RENAME TO "ConsultationType";
DROP TYPE "ConsultationType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_patientId_fkey";

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "medicalCondition",
DROP COLUMN "patientId",
ADD COLUMN     "patient" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropEnum
DROP TYPE "UserRole";
