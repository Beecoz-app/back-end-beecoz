/*
  Warnings:

  - You are about to drop the column `loginId` on the `tb_autonomous` table. All the data in the column will be lost.
  - You are about to drop the column `loginId` on the `tb_clients` table. All the data in the column will be lost.
  - You are about to drop the `tb_login` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_autonomous` DROP FOREIGN KEY `tb_autonomous_loginId_fkey`;

-- DropForeignKey
ALTER TABLE `tb_clients` DROP FOREIGN KEY `tb_clients_loginId_fkey`;

-- AlterTable
ALTER TABLE `tb_autonomous` DROP COLUMN `loginId`;

-- AlterTable
ALTER TABLE `tb_clients` DROP COLUMN `loginId`;

-- DropTable
DROP TABLE `tb_login`;
