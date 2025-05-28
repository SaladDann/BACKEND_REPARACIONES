import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();


export const obtenerTodosRepuestosModelo = async () => {
  return await prisma.tb_repuesto.findMany();
};


export const obtenerRepuestoPorIdModelo = async (id) => {
  return await prisma.tb_repuesto.findUnique({
    where: { ID_Repuesto: id },
  });
};

export const crearRepuestoModelo = async (data) => {
  return await prisma.tb_repuesto.create({
    data,
  });
};


export const actualizarRepuestoModelo = async (id, data) => {
  return await prisma.tb_repuesto.update({
    where: { ID_Repuesto: id },
    data,
  });
};

export const eliminarRepuestoModelo = async (id) => {
  return await prisma.tb_repuesto.delete({
    where: { ID_Repuesto: id },
  });
};
