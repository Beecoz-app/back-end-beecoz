/*
  Warnings:

  - You are about to drop the column `tb_servtypes_service` on the `tb_servtypes` table. All the data in the column will be lost.
  - Added the required column `tb_servtypes_name` to the `tb_servtypes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_servtypes` DROP COLUMN `tb_servtypes_service`,
    ADD COLUMN `tb_servtypes_name` VARCHAR(60) NOT NULL;
