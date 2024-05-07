-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);
