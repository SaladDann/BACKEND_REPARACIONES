import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const obtenerFacturaPorReparacion = async (ID_Reparacion) => {
  try {
    const factura = await prisma.tb_reparacion.findUnique({
      where: { ID_Reparacion: Number(ID_Reparacion) },
      include: {
        cliente: true,
        tecnico: true,
        equipo: true,
        detalles: {
          include: {
            repuesto: true,
          },
        },
      },
    });
    return factura;
  } catch (error) {
    throw new Error('Error al obtener factura: ' + error.message);
  }
};
