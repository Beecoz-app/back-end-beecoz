/*
  Warnings:

  - Added the required column `tb_clients_login` to the `tb_clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_clients_password` to the `tb_clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_clients` ADD COLUMN `tb_clients_login` VARCHAR(60) NOT NULL,
    ADD COLUMN `tb_clients_password` VARCHAR(60) NOT NULL;
