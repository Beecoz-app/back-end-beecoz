/*
  Warnings:

  - You are about to drop the column `region` on the `tb_publications` table. All the data in the column will be lost.
  - You are about to drop the column `tb_publications_data` on the `tb_publications` table. All the data in the column will be lost.
  - You are about to drop the column `tb_publications_desc` on the `tb_publications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tb_publications` DROP COLUMN `region`,
    DROP COLUMN `tb_publications_data`,
    DROP COLUMN `tb_publications_desc`;
