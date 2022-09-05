-- CreateTable
CREATE TABLE `tb_login` (
    `tb_login_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_login_email` VARCHAR(191) NOT NULL,
    `tb_login_password` VARCHAR(20) NOT NULL,
    `tb_login_cellnumber` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tb_login_tb_login_email_key`(`tb_login_email`),
    UNIQUE INDEX `tb_login_tb_login_cellnumber_key`(`tb_login_cellnumber`),
    PRIMARY KEY (`tb_login_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_usertype` (
    `tb_usertype_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_usertype_level` ENUM('Beginner', 'Intermediate', 'Queen') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tb_usertype_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_client_profiles` (
    `tb_client_profiles_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_client_profiles_bio` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tb_client_profiles_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_autonomous_profiles` (
    `tb_autonomous_profiles_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_autonomous_profiles_bio` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tb_autonomous_profiles_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_autonomous` (
    `tb_autonomous_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_autonomous_name` VARCHAR(20) NOT NULL,
    `tb_autonomous_lastname` VARCHAR(60) NOT NULL,
    `gender` ENUM('Male', 'Female') NOT NULL,
    `tb_autonomous_borndate` DATE NOT NULL,
    `tb_autonomous_cpf` CHAR(11) NOT NULL,
    `tb_autonomous_cnpj` CHAR(14) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `profileId` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,
    `loginId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_autonomous_profileId_key`(`profileId`),
    UNIQUE INDEX `tb_autonomous_loginId_key`(`loginId`),
    PRIMARY KEY (`tb_autonomous_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_clients` (
    `tb_clients_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_clients_name` VARCHAR(20) NOT NULL,
    `tb_clients_lastname` VARCHAR(60) NOT NULL,
    `gender` ENUM('Male', 'Female') NOT NULL,
    `tb_clients_borndate` DATE NOT NULL,
    `tb_clients_cpf` CHAR(11) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `profileId` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,
    `loginId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_clients_profileId_key`(`profileId`),
    UNIQUE INDEX `tb_clients_loginId_key`(`loginId`),
    PRIMARY KEY (`tb_clients_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_servtypes` (
    `tb_servtypes_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_servtypes_service` VARCHAR(60) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tb_servtypes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_services` (
    `tb_services_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `autonomousId` INTEGER NOT NULL,
    `serviceTypeId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_services_autonomousId_key`(`autonomousId`),
    UNIQUE INDEX `tb_services_serviceTypeId_key`(`serviceTypeId`),
    PRIMARY KEY (`tb_services_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_publications` (
    `tb_publications_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_publications_title` VARCHAR(30) NOT NULL,
    `tb_publications_desc` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `tb_publications_data` DATE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `serviceTypeId` INTEGER NOT NULL,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_publications_serviceTypeId_key`(`serviceTypeId`),
    PRIMARY KEY (`tb_publications_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_interests` (
    `tb_interests_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `publicationId` INTEGER NOT NULL,
    `autonomousId` INTEGER NOT NULL,

    PRIMARY KEY (`tb_interests_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_chat` (
    `tb_chat_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `tb_chat_hour` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tb_chat_message` LONGBLOB NOT NULL,

    PRIMARY KEY (`tb_chat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_ratings` (
    `tb_ratings_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tb_ratings_stars` INTEGER NOT NULL,
    `tb_ratings_comment` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tb_ratings_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_works` (
    `tb_works_id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('Progress', 'Completed', 'Open') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `interestId` INTEGER NOT NULL,
    `ratingId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_works_interestId_key`(`interestId`),
    PRIMARY KEY (`tb_works_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_autonomous` ADD CONSTRAINT `tb_autonomous_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `tb_autonomous_profiles`(`tb_autonomous_profiles_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_autonomous` ADD CONSTRAINT `tb_autonomous_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `tb_usertype`(`tb_usertype_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_autonomous` ADD CONSTRAINT `tb_autonomous_loginId_fkey` FOREIGN KEY (`loginId`) REFERENCES `tb_login`(`tb_login_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_clients` ADD CONSTRAINT `tb_clients_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `tb_client_profiles`(`tb_client_profiles_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_clients` ADD CONSTRAINT `tb_clients_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `tb_usertype`(`tb_usertype_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_clients` ADD CONSTRAINT `tb_clients_loginId_fkey` FOREIGN KEY (`loginId`) REFERENCES `tb_login`(`tb_login_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_services` ADD CONSTRAINT `tb_services_autonomousId_fkey` FOREIGN KEY (`autonomousId`) REFERENCES `tb_autonomous`(`tb_autonomous_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_services` ADD CONSTRAINT `tb_services_serviceTypeId_fkey` FOREIGN KEY (`serviceTypeId`) REFERENCES `tb_servtypes`(`tb_servtypes_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_publications` ADD CONSTRAINT `tb_publications_serviceTypeId_fkey` FOREIGN KEY (`serviceTypeId`) REFERENCES `tb_servtypes`(`tb_servtypes_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_publications` ADD CONSTRAINT `tb_publications_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `tb_clients`(`tb_clients_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_interests` ADD CONSTRAINT `tb_interests_publicationId_fkey` FOREIGN KEY (`publicationId`) REFERENCES `tb_publications`(`tb_publications_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_interests` ADD CONSTRAINT `tb_interests_autonomousId_fkey` FOREIGN KEY (`autonomousId`) REFERENCES `tb_autonomous`(`tb_autonomous_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_works` ADD CONSTRAINT `tb_works_interestId_fkey` FOREIGN KEY (`interestId`) REFERENCES `tb_interests`(`tb_interests_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_works` ADD CONSTRAINT `tb_works_ratingId_fkey` FOREIGN KEY (`ratingId`) REFERENCES `tb_ratings`(`tb_ratings_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
