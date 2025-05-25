import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();


/**
 * Obtiene la información completa de una reparación para generar factura,
 * incluyendo datos de cliente, técnico, equipo y detalle de repuestos.
 * @param {number} ID_Reparacion - ID de la reparación
 * @returns {Promise<Object|null>} Datos completos de la reparación con detalles
 */
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
