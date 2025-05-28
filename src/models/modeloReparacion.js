import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

// Obtener todas las reparaciones (Admin y Técnicos)
export const obtenerTodasReparacionesModelo = async () => {
  return await prisma.tb_reparacion.findMany({
    include: {
      cliente: true,
      tecnico: true,
      equipo: true,
      estados: true,
      detalles: true,
    },
  });
};

// Obtener reparación por ID (mantener si otras rutas lo usan para buscar por ID de reparación)
export const obtenerReparacionPorIdModelo = async (id) => {
  return await prisma.tb_reparacion.findUnique({
    where: { ID_Reparacion: id },
    include: {
      cliente: true,
      tecnico: true,
      equipo: true,
      estados: true,
      detalles: {
        include: {
          repuesto: true,
        },
      },
    },
  });
};

// Obtener reparaciones por cliente (para que el cliente vea sus reparaciones)
// ESTA ES LA FUNCIÓN CLAVE QUE SE LLAMA DESDE EL CONTROLADOR MODIFICADO
export const obtenerReparacionesPorClienteModelo = async (idCliente) => {
  return await prisma.tb_reparacion.findMany({
    where: { ID_Cliente: idCliente },
    include: {
      equipo: true,
      tecnico: true,
      estados: true,
      detalles: {
        include: {
          repuesto: true,
        },
      },
    },
    orderBy: {
      Fecha_Ingreso: "desc",
    },
  });
};

// Obtener reparaciones por técnico (para que vea las asignadas)
export const obtenerReparacionesPorTecnicoModelo = async (idTecnico) => {
  return await prisma.tb_reparacion.findMany({
    where: { ID_Tecnico: idTecnico },
    include: {
      equipo: true,
      cliente: true,
      estados: true,
      detalles: {
        include: {
          repuesto: true,
        },
      },
    },
    orderBy: {
      Fecha_Ingreso: "desc",
    },
  });
};

// Crear una reparación (Admin o Técnico)
export const crearReparacionModelo = async (data) => {
  return await prisma.tb_reparacion.create({
    data,
  });
};

// Actualizar reparación (Admin o Técnico)
export const actualizarReparacionModelo = async (id, data) => {
  return await prisma.tb_reparacion.update({
    where: { ID_Reparacion: id },
    data,
  });
};

// Eliminar reparación (Admin)
export const eliminarReparacionModelo = async (id) => {
  return await prisma.tb_reparacion.delete({
    where: { ID_Reparacion: id },
  });
};