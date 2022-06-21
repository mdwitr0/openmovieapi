/*
  Warnings:

  - You are about to drop the column `balanse` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "balanse",
ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0;
