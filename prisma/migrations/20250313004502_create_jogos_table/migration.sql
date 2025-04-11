-- CreateTable
CREATE TABLE "Jogos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "lancamento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "console" TEXT NOT NULL,
    "avaliacao" INTEGER NOT NULL,

    CONSTRAINT "Jogos_pkey" PRIMARY KEY ("id")
);
