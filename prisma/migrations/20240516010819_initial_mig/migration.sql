-- CreateTable
CREATE TABLE `Denuncia` (
    `iddenuncias` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`iddenuncias`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
