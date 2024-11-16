/*
  Warnings:

  - You are about to drop the column `country` on the `accommodations` table. All the data in the column will be lost.
  - You are about to drop the column `neighbourhood` on the `accommodations` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `accommodations` table. All the data in the column will be lost.
  - Added the required column `location` to the `accommodations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accommodations" DROP COLUMN "country",
DROP COLUMN "neighbourhood",
DROP COLUMN "state",
ADD COLUMN     "location" TEXT NOT NULL;
