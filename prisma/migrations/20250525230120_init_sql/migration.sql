-- DropIndex
DROP INDEX `ID_Reparacion` ON `tb_detalle_reparacion_repuesto`;

-- DropIndex
DROP INDEX `ID_Repuesto` ON `tb_detalle_reparacion_repuesto`;

-- DropIndex
DROP INDEX `ID_Cliente` ON `tb_equipo`;

-- DropIndex
DROP INDEX `ID_Cliente` ON `tb_reparacion`;

-- DropIndex
DROP INDEX `ID_Equipo` ON `tb_reparacion`;

-- DropIndex
DROP INDEX `ID_Tecnico` ON `tb_reparacion`;

-- DropIndex
DROP INDEX `fk_usuario_cliente` ON `tb_usuario`;

-- DropIndex
DROP INDEX `fk_usuario_tecnico` ON `tb_usuario`;

-- AlterTable
ALTER TABLE `tb_estado_reparacion` ADD COLUMN `Fecha_Aprobacion` DATETIME(0) NULL,
    ADD COLUMN `ID_Usuario_Aprobado` INTEGER NULL;

-- CreateTable
CREATE TABLE `tb_factura` (
    `ID_Factura` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Reparacion` INTEGER NOT NULL,
    `Fecha_Emision` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `Subtotal` DECIMAL(10, 2) NOT NULL,
    `IVA` DECIMAL(10, 2) NOT NULL,
    `Total` DECIMAL(10, 2) NOT NULL,
    `Metodo_Pago` VARCHAR(50) NULL,
    `Estado` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `tb_factura_ID_Reparacion_key`(`ID_Reparacion`),
    INDEX `tb_factura_ID_Reparacion_idx`(`ID_Reparacion`),
    PRIMARY KEY (`ID_Factura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_notificacion` (
    `ID_Notificacion` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Usuario` INTEGER NOT NULL,
    `Tipo` VARCHAR(50) NOT NULL,
    `Mensaje` TEXT NOT NULL,
    `Estado_Leido` BOOLEAN NOT NULL DEFAULT false,
    `Fecha` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `tb_notificacion_ID_Usuario_idx`(`ID_Usuario`),
    PRIMARY KEY (`ID_Notificacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `tb_estado_reparacion_ID_Usuario_Aprobado_idx` ON `tb_estado_reparacion`(`ID_Usuario_Aprobado`);

-- AddForeignKey
ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ID_Cliente_fkey` FOREIGN KEY (`ID_Cliente`) REFERENCES `tb_cliente`(`ID_Cliente`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ID_Tecnico_fkey` FOREIGN KEY (`ID_Tecnico`) REFERENCES `tb_tecnico`(`ID_Tecnico`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_equipo` ADD CONSTRAINT `tb_equipo_ID_Cliente_fkey` FOREIGN KEY (`ID_Cliente`) REFERENCES `tb_cliente`(`ID_Cliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_reparacion` ADD CONSTRAINT `tb_reparacion_ID_Cliente_fkey` FOREIGN KEY (`ID_Cliente`) REFERENCES `tb_cliente`(`ID_Cliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_reparacion` ADD CONSTRAINT `tb_reparacion_ID_Tecnico_fkey` FOREIGN KEY (`ID_Tecnico`) REFERENCES `tb_tecnico`(`ID_Tecnico`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_reparacion` ADD CONSTRAINT `tb_reparacion_ID_Equipo_fkey` FOREIGN KEY (`ID_Equipo`) REFERENCES `tb_equipo`(`ID_Equipo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_detalle_reparacion_repuesto` ADD CONSTRAINT `tb_detalle_reparacion_repuesto_ID_Reparacion_fkey` FOREIGN KEY (`ID_Reparacion`) REFERENCES `tb_reparacion`(`ID_Reparacion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_detalle_reparacion_repuesto` ADD CONSTRAINT `tb_detalle_reparacion_repuesto_ID_Repuesto_fkey` FOREIGN KEY (`ID_Repuesto`) REFERENCES `tb_repuesto`(`ID_Repuesto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_estado_reparacion` ADD CONSTRAINT `tb_estado_reparacion_ID_Reparacion_fkey` FOREIGN KEY (`ID_Reparacion`) REFERENCES `tb_reparacion`(`ID_Reparacion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_estado_reparacion` ADD CONSTRAINT `tb_estado_reparacion_ID_Usuario_Aprobado_fkey` FOREIGN KEY (`ID_Usuario_Aprobado`) REFERENCES `tb_usuario`(`ID_Usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_factura` ADD CONSTRAINT `tb_factura_ID_Reparacion_fkey` FOREIGN KEY (`ID_Reparacion`) REFERENCES `tb_reparacion`(`ID_Reparacion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_notificacion` ADD CONSTRAINT `tb_notificacion_ID_Usuario_fkey` FOREIGN KEY (`ID_Usuario`) REFERENCES `tb_usuario`(`ID_Usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `tb_estado_reparacion` RENAME INDEX `ID_Reparacion` TO `tb_estado_reparacion_ID_Reparacion_idx`;

-- RenameIndex
ALTER TABLE `tb_usuario` RENAME INDEX `Usuario_Name` TO `tb_usuario_Usuario_Name_key`;
