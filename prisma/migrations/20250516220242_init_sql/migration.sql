-- CreateTable
CREATE TABLE `tb_cliente` (
    `ID_Cliente` INTEGER NOT NULL AUTO_INCREMENT,
    `Cedula` VARCHAR(20) NOT NULL,
    `Nombres` VARCHAR(100) NOT NULL,
    `Apellidos` VARCHAR(100) NOT NULL,
    `Telefono` VARCHAR(20) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Direccion` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`ID_Cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_detalle_reparacion_repuesto` (
    `ID_Detalle` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Reparacion` INTEGER NOT NULL,
    `ID_Repuesto` INTEGER NOT NULL,
    `Cantidad` INTEGER NOT NULL,
    `Subtotal` DECIMAL(10, 2) NOT NULL,

    INDEX `ID_Reparacion`(`ID_Reparacion`),
    INDEX `ID_Repuesto`(`ID_Repuesto`),
    PRIMARY KEY (`ID_Detalle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_equipo` (
    `ID_Equipo` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Cliente` INTEGER NOT NULL,
    `Nombre` VARCHAR(100) NOT NULL,
    `Marca` VARCHAR(100) NULL,
    `Modelo` VARCHAR(100) NULL,
    `Descripcion_problema` TEXT NULL,
    `Estado` VARCHAR(50) NULL,

    INDEX `ID_Cliente`(`ID_Cliente`),
    PRIMARY KEY (`ID_Equipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_estado_reparacion` (
    `ID_Estado` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Reparacion` INTEGER NOT NULL,
    `FechaHora` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Estado` VARCHAR(100) NOT NULL,
    `Descripcion` TEXT NULL,
    `Requiere_Aprobacion` BOOLEAN NULL DEFAULT false,
    `Aprobado` BOOLEAN NULL,

    INDEX `ID_Reparacion`(`ID_Reparacion`),
    PRIMARY KEY (`ID_Estado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_reparacion` (
    `ID_Reparacion` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Cliente` INTEGER NOT NULL,
    `ID_Tecnico` INTEGER NOT NULL,
    `ID_Equipo` INTEGER NOT NULL,
    `Fecha_Ingreso` DATETIME(0) NOT NULL,
    `Fecha_Entrega` DATETIME(0) NOT NULL,
    `CostoServicio` DECIMAL(10, 2) NOT NULL,
    `IVA` DECIMAL(10, 2) NOT NULL,
    `Total` DECIMAL(10, 2) NOT NULL,

    INDEX `ID_Cliente`(`ID_Cliente`),
    INDEX `ID_Equipo`(`ID_Equipo`),
    INDEX `ID_Tecnico`(`ID_Tecnico`),
    PRIMARY KEY (`ID_Reparacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_repuesto` (
    `ID_Repuesto` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NOT NULL,
    `Precio` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`ID_Repuesto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_tecnico` (
    `ID_Tecnico` INTEGER NOT NULL AUTO_INCREMENT,
    `Cedula` VARCHAR(20) NOT NULL,
    `Nombres` VARCHAR(100) NOT NULL,
    `Apellidos` VARCHAR(100) NOT NULL,
    `Telefono` VARCHAR(20) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Especialidad` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`ID_Tecnico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_usuario` (
    `ID_Usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `Usuario_Name` VARCHAR(50) NOT NULL,
    `Usuario_Password` VARCHAR(255) NOT NULL,
    `Usuario_nivel` ENUM('Cliente', 'Tecnico', 'Admin') NOT NULL,
    `Usuario_activo` BOOLEAN NOT NULL DEFAULT true,
    `ID_Cliente` INTEGER NULL,
    `ID_Tecnico` INTEGER NULL,

    UNIQUE INDEX `Usuario_Name`(`Usuario_Name`),
    INDEX `fk_usuario_cliente`(`ID_Cliente`),
    INDEX `fk_usuario_tecnico`(`ID_Tecnico`),
    PRIMARY KEY (`ID_Usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
