/*
  Warnings:

  - Added the required column `clientId` to the `tb_publications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_publications` ADD COLUMN `clientId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tb_publications` ADD CONSTRAINT `tb_publications_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `tb_clients`(`tb_clients_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
