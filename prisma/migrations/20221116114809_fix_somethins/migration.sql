-- AlterTable
ALTER TABLE `tb_autonomous` MODIFY `tb_autonomous_cpf` VARCHAR(191) NOT NULL,
    MODIFY `tb_autonomous_cnpj` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tb_clients` MODIFY `tb_clients_cpf` VARCHAR(191) NOT NULL;
