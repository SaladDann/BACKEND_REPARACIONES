import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const crearNotificacionModelo = async (data) => {
  return await prisma.tb_notificacion.create({ data });
};

export const obtenerNotificacionesPorClienteModelo = async (idCliente) => {
  return await prisma.tb_notificacion.findMany({
    where: { ID_Cliente: idCliente, Enviado: false }, 
    include: { reparacion: true },
    orderBy: { Fecha_Envio: "desc" },
  });
};

export const obtenerNotificacionesPorReparacionModelo = async (idReparacion) => {
  return await prisma.tb_notificacion.findMany({
    where: { ID_Reparacion: idReparacion, Enviado: false },
    include: { cliente: true },
    orderBy: { Fecha_Envio: "desc" },
  });
};

export const actualizarNotificacionModelo = async (idNotificacion, data) => {
  return await prisma.tb_notificacion.update({
    where: { ID_Notificacion: idNotificacion },
    data,
  });
};