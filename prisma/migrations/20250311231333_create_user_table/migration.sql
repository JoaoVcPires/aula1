-- CreateTable
CREATE TABLE "User" (
    "iduser" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("iduser")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_document_key" ON "User"("document");
