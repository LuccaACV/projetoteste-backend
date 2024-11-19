/*
  Warnings:

  - Added the required column `isAvailable` to the `accommodations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accommodations" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL;
