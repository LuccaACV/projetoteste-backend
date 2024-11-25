/*
  Warnings:

  - You are about to drop the column `sumary` on the `accommodations` table. All the data in the column will be lost.
  - Added the required column `summary` to the `accommodations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accommodations" DROP COLUMN "sumary",
ADD COLUMN     "summary" TEXT NOT NULL;
