/*
  Warnings:

  - You are about to drop the column `clientId` on the `tb_publications` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_publications` DROP FOREIGN KEY `tb_publications_clientId_fkey`;

-- AlterTable
ALTER TABLE `tb_publications` DROP COLUMN `clientId`;
