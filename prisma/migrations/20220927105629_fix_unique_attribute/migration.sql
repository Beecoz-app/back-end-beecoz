/*
  Warnings:

  - Added the required column `region` to the `tb_publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_publications_data` to the `tb_publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tb_publications_desc` to the `tb_publications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_publications` ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ADD COLUMN `tb_publications_data` DATE NOT NULL,
    ADD COLUMN `tb_publications_desc` VARCHAR(191) NOT NULL;
