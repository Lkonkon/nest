/*
  Warnings:

  - You are about to drop the `Jogos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Jogos";

-- CreateTable
CREATE TABLE "jogos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "lancamento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "consoles" TEXT NOT NULL,
    "avaliacao" INTEGER NOT NULL,

    CONSTRAINT "jogos_pkey" PRIMARY KEY ("id")
);
