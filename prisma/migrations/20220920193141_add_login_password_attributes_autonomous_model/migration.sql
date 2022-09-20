/*
  Warnings:

  - Added the required column `tb_autonomous_login` to the `tb_autonomous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_autonomous_password` to the `tb_autonomous` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_autonomous` ADD COLUMN `tb_autonomous_login` VARCHAR(60) NOT NULL,
    ADD COLUMN `tb_autonomous_password` VARCHAR(60) NOT NULL;
