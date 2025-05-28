-- CreateTable
CREATE TABLE `tb_cliente` (
    `ID_Cliente` INTEGER NOT NULL AUTO_INCREMENT,
    `Cedula` VARCHAR(20) NULL,
    `Nombres` VARCHAR(100) NULL,
    `Apellidos` VARCHAR(100) NULL,
    `Telefono` VARCHAR(20) NULL,
    `Email` VARCHAR(100) NULL,
    `Direccion` VARCHAR(150) NULL,

    INDEX `idx_cliente_id`(`ID_Cliente`),
    PRIMARY KEY (`ID_Cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_detalle_reparacion_repuesto` (
    `ID_Detalle` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Reparacion` INTEGER NULL,
    `ID_Repuesto` INTEGER NULL,
    `Cantidad` INTEGER NULL,
    `Subtotal` DECIMAL(10, 2) NULL,

    INDEX `idx_detalle_id`(`ID_Detalle`),
    INDEX `tb_detalle_reparacion_repuesto_ID_Reparacion_idx`(`ID_Reparacion`),
    INDEX `tb_detalle_reparacion_repuesto_ID_Repuesto_idx`(`ID_Repuesto`),
    PRIMARY KEY (`ID_Detalle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_equipo` (
    `ID_Equipo` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Cliente` INTEGER NULL,
    `Nombre` VARCHAR(100) NULL,
    `Marca` VARCHAR(100) NULL,
    `Modelo` VARCHAR(100) NULL,
    `Descripcion_problema` TEXT NULL,
    `Estado` VARCHAR(50) NULL,

    INDEX `idx_equipo_id`(`ID_Equipo`),
    INDEX `tb_equipo_ID_Cliente_idx`(`ID_Cliente`),
    PRIMARY KEY (`ID_Equipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_estado_reparacion` (
    `ID_Estado` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Reparacion` INTEGER NULL,
    `FechaHora` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Estado` VARCHAR(100) NULL,
    `Descripcion` TEXT NULL,
    `Requiere_Aprobacion` BOOLEAN NULL DEFAULT false,
    `Aprobado` BOOLEAN NULL,
    `ID_Usuario_Aprobado` INTEGER NULL,
    `Fecha_Aprobacion` DATETIME(0) NULL,

    INDEX `idx_estado_id`(`ID_Estado`),
    INDEX `tb_estado_reparacion_ID_Reparacion_idx`(`ID_Reparacion`),
    INDEX `tb_estado_reparacion_ID_Usuario_Aprobado_idx`(`ID_Usuario_Aprobado`),
    PRIMARY KEY (`ID_Estado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_factura` (
    `ID_Factura` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Reparacion` INTEGER NULL,
    `Fecha_Emision` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Subtotal` DECIMAL(10, 2) NULL,
    `IVA` DECIMAL(10, 2) NULL,
    `Total` DECIMAL(10, 2) NULL,
    `Metodo_Pago` VARCHAR(50) NULL,
    `Estado` VARCHAR(50) NULL,

    UNIQUE INDEX `ID_Reparacion`(`ID_Reparacion`),
    INDEX `idx_factura_id`(`ID_Factura`),
    INDEX `tb_factura_ID_Reparacion_idx`(`ID_Reparacion`),
    PRIMARY KEY (`ID_Factura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_notificacion` (
    `ID_Notificacion` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Cliente` INTEGER NULL,
    `ID_Reparacion` INTEGER NULL,
    `ID_Usuario` INTEGER NULL,
    `Mensaje` TEXT NULL,
    `Fecha_Envio` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Enviado` BOOLEAN NULL DEFAULT false,
    `Tipo` VARCHAR(50) NULL,
    `Tipo_Cambio` VARCHAR(50) NULL,
    `Aprobado` BOOLEAN NULL,
    `Datos_Cambio` JSON NULL,

    INDEX `idx_notificacion_id`(`ID_Notificacion`),
    INDEX `tb_notificacion_ID_Cliente_idx`(`ID_Cliente`),
    INDEX `tb_notificacion_ID_Reparacion_idx`(`ID_Reparacion`),
    INDEX `tb_notificacion_ID_Usuario_idx`(`ID_Usuario`),
    PRIMARY KEY (`ID_Notificacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_reparacion` (
    `ID_Reparacion` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Cliente` INTEGER NULL,
    `ID_Tecnico` INTEGER NULL,
    `ID_Equipo` INTEGER NULL,
    `Fecha_Ingreso` DATETIME(0) NULL,
    `Fecha_Entrega` DATETIME(0) NULL,
    `CostoServicio` DECIMAL(10, 2) NULL,
    `IVA` DECIMAL(10, 2) NULL,
    `Total` DECIMAL(10, 2) NULL,

    INDEX `idx_reparacion_id`(`ID_Reparacion`),
    INDEX `tb_reparacion_ID_Cliente_idx`(`ID_Cliente`),
    INDEX `tb_reparacion_ID_Equipo_idx`(`ID_Equipo`),
    INDEX `tb_reparacion_ID_Tecnico_idx`(`ID_Tecnico`),
    PRIMARY KEY (`ID_Reparacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_repuesto` (
    `ID_Repuesto` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(100) NULL,
    `Precio` DECIMAL(10, 2) NULL,

    INDEX `idx_repuesto_id`(`ID_Repuesto`),
    PRIMARY KEY (`ID_Repuesto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_tecnico` (
    `ID_Tecnico` INTEGER NOT NULL AUTO_INCREMENT,
    `Cedula` VARCHAR(20) NULL,
    `Nombres` VARCHAR(100) NULL,
    `Apellidos` VARCHAR(100) NULL,
    `Telefono` VARCHAR(20) NULL,
    `Email` VARCHAR(100) NULL,
    `Especialidad` VARCHAR(100) NULL,

    INDEX `idx_tecnico_id`(`ID_Tecnico`),
    PRIMARY KEY (`ID_Tecnico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_usuario` (
    `ID_Usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `Usuario_Name` VARCHAR(50) NULL,
    `Usuario_Password` VARCHAR(255) NULL,
    `Usuario_nivel` ENUM('Cliente', 'Tecnico', 'Admin') NULL,
    `Usuario_activo` BOOLEAN NULL DEFAULT true,
    `ID_Cliente` INTEGER NULL,
    `ID_Tecnico` INTEGER NULL,

    UNIQUE INDEX `Usuario_Name`(`Usuario_Name`),
    INDEX `idx_usuario_id`(`ID_Usuario`),
    INDEX `tb_usuario_ID_Cliente_idx`(`ID_Cliente`),
    INDEX `tb_usuario_ID_Tecnico_idx`(`ID_Tecnico`),
    PRIMARY KEY (`ID_Usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
