import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

// Agregar repuesto a una reparación
export const agregarRepuestoAReparacionModelo = async ({ ID_Reparacion, ID_Repuesto, Cantidad }) => {
  const repuesto = await prisma.tb_repuesto.findUnique({
    where: { ID_Repuesto },
  });

  if (!repuesto) {
    throw new Error("Repuesto no encontrado");
  }

  const Subtotal = repuesto.Precio * Cantidad;

  return await prisma.tb_detalle_reparacion_repuesto.create({
    data: {
      ID_Reparacion,
      ID_Repuesto,
      Cantidad,
      Subtotal,
    },
  });
};

export const obtenerDetallesPorReparacionModelo = async (idReparacion) => {
  return await prisma.tb_detalle_reparacion_repuesto.findMany({
    where: { ID_Reparacion: idReparacion },
    include: {
      repuesto: true,
    },
  });
};
