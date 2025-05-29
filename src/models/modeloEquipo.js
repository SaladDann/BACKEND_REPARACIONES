import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const obtenerTodosEquiposModelo = async () => {
  return await prisma.tb_equipo.findMany();
};

export const obtenerEquipoPorIdModelo = async (id) => {
  return await prisma.tb_equipo.findUnique({
    where: { ID_Equipo: id },
  });
};

export const obtenerEquiposPorClienteModelo = async (idCliente) => {
  return await prisma.tb_equipo.findMany({
    where: { ID_Cliente: idCliente },
  });
};

export const crearEquipoModelo = async (data) => {
  return await prisma.tb_equipo.create({ data });
};

export const actualizarEquipoModelo = async (id, data) => {
  return await prisma.tb_equipo.update({
    where: { ID_Equipo: id },
    data,
  });
};

export const eliminarEquipoModelo = async (id) => {
  return await prisma.tb_equipo.delete({
    where: { ID_Equipo: id },
  });
};