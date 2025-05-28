import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const obtenerTodosEstadosReparacionModelo = async () => {
  return await prisma.tb_estado_reparacion.findMany({
    include: {
      reparacion: true,
    },
    orderBy: {
      FechaHora: 'desc',
    },
  });
};

export const obtenerEstadosPorReparacionModelo = async (idReparacion) => {
  return await prisma.tb_estado_reparacion.findMany({
    where: { ID_Reparacion: idReparacion },
    orderBy: {
      FechaHora: 'desc',
    },
  });
};

export const crearEstadoReparacionModelo = async (data) => {
  return await prisma.tb_estado_reparacion.create({
    data,
  });
};

export const actualizarEstadoReparacionModelo = async (id, data) => {
  return await prisma.tb_estado_reparacion.update({
    where: { ID_Estado: id },
    data,
  });
};

export const eliminarEstadoReparacionModelo = async (id) => {
  return await prisma.tb_estado_reparacion.delete({
    where: { ID_Estado: id },
  });
};


