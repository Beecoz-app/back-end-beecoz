/*
  Warnings:

  - Added the required column `tb_publication_type` to the `tb_publications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_publications` ADD COLUMN `tb_publication_type` ENUM('Beginner', 'Intermediate', 'Queen') NOT NULL;
