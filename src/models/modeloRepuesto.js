import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

/**
 * Obtener todos los repuestos
 */
export const obtenerTodosRepuestosModelo = async () => {
  return await prisma.tb_repuesto.findMany();
};

/**
 * Obtener un repuesto por ID
 */
export const obtenerRepuestoPorIdModelo = async (id) => {
  return await prisma.tb_repuesto.findUnique({
    where: { ID_Repuesto: id },
  });
};

/**
 * Crear un nuevo repuesto
 */
export const crearRepuestoModelo = async (data) => {
  return await prisma.tb_repuesto.create({
    data,
  });
};

/**
 * Actualizar un repuesto existente
 */
export const actualizarRepuestoModelo = async (id, data) => {
  return await prisma.tb_repuesto.update({
    where: { ID_Repuesto: id },
    data,
  });
};

/**
 * Eliminar un repuesto por ID
 */
export const eliminarRepuestoModelo = async (id) => {
  return await prisma.tb_repuesto.delete({
    where: { ID_Repuesto: id },
  });
};
