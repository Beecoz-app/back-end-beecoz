/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `tb_publications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tb_publications_clientId_key` ON `tb_publications`(`clientId`);
