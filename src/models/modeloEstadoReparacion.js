import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

// Obtener todos los estados de reparación
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

// Obtener estados de una reparación específica
export const obtenerEstadosPorReparacionModelo = async (idReparacion) => {
  return await prisma.tb_estado_reparacion.findMany({
    where: { ID_Reparacion: idReparacion },
    orderBy: {
      FechaHora: 'desc',
    },
  });
};

// Crear un nuevo estado para una reparación
export const crearEstadoReparacionModelo = async (data) => {
  return await prisma.tb_estado_reparacion.create({
    data,
  });
};

// Actualizar estado de reparación (ej. aprobar o añadir descripción)
export const actualizarEstadoReparacionModelo = async (id, data) => {
  return await prisma.tb_estado_reparacion.update({
    where: { ID_Estado: id },
    data,
  });
};

// Eliminar un estado de reparación (sólo si es necesario para lógica administrativa)
export const eliminarEstadoReparacionModelo = async (id) => {
  return await prisma.tb_estado_reparacion.delete({
    where: { ID_Estado: id },
  });
};


