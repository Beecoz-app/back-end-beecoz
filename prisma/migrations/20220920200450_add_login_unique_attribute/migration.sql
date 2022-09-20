/*
  Warnings:

  - A unique constraint covering the columns `[tb_autonomous_login]` on the table `tb_autonomous` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tb_clients_login]` on the table `tb_clients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tb_autonomous_tb_autonomous_login_key` ON `tb_autonomous`(`tb_autonomous_login`);

-- CreateIndex
CREATE UNIQUE INDEX `tb_clients_tb_clients_login_key` ON `tb_clients`(`tb_clients_login`);
