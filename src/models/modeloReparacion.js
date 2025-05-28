import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

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


export const crearReparacionModelo = async (data) => {
  return await prisma.tb_reparacion.create({
    data,
  });
};


export const actualizarReparacionModelo = async (id, data) => {
  return await prisma.tb_reparacion.update({
    where: { ID_Reparacion: id },
    data,
  });
};


export const eliminarReparacionModelo = async (id) => {
  return await prisma.tb_reparacion.delete({
    where: { ID_Reparacion: id },
  });
};