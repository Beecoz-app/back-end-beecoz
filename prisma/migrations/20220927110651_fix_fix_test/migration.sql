/*
  Warnings:

  - You are about to drop the column `serviceTypeId` on the `tb_publications` table. All the data in the column will be lost.
  - You are about to drop the column `serviceTypeId` on the `tb_services` table. All the data in the column will be lost.
  - Added the required column `servTypeId` to the `tb_publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servTypeId` to the `tb_services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_publications` DROP FOREIGN KEY `tb_publications_serviceTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `tb_services` DROP FOREIGN KEY `tb_services_serviceTypeId_fkey`;

-- AlterTable
ALTER TABLE `tb_publications` DROP COLUMN `serviceTypeId`,
    ADD COLUMN `servTypeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_services` DROP COLUMN `serviceTypeId`,
    ADD COLUMN `servTypeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tb_services` ADD CONSTRAINT `tb_services_servTypeId_fkey` FOREIGN KEY (`servTypeId`) REFERENCES `tb_servtypes`(`tb_servtypes_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_publications` ADD CONSTRAINT `tb_publications_servTypeId_fkey` FOREIGN KEY (`servTypeId`) REFERENCES `tb_servtypes`(`tb_servtypes_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
