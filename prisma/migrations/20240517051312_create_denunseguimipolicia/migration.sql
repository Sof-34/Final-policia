-- CreateTable
CREATE TABLE `Denunseguimipolicia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `iddenuncia` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `fechaSeguimiento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Denunseguimipolicia` ADD CONSTRAINT `Denunseguimipolicia_iddenuncia_fkey` FOREIGN KEY (`iddenuncia`) REFERENCES `Denuncia`(`iddenuncias`) ON DELETE RESTRICT ON UPDATE CASCADE;
