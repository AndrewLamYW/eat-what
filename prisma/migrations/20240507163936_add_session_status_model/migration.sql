/*
  Warnings:

  - Added the required column `statusId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "statusId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "SessionStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SessionStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "SessionStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
