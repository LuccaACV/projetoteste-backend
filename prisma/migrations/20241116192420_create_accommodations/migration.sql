-- CreateTable
CREATE TABLE "accommodations" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "neighbourhood" TEXT NOT NULL,
    "sumary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "accommodations_pkey" PRIMARY KEY ("id")
);
