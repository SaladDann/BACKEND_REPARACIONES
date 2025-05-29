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
        factura: true,
      },
    });
    return factura;
  } catch (error) {
    throw new Error('Error al obtener información de reparación para la factura: ' + error.message);
  }
};

export const guardarFactura = async (data) => {
  try {
    const facturaGuardada = await prisma.tb_factura.create({
      data: {
        ID_Reparacion: data.ID_Reparacion,
        Fecha_Emision: data.Fecha_Emision,
        Subtotal: data.Subtotal,
        IVA: data.IVA,
        Total: data.Total,
        Metodo_Pago: data.Metodo_Pago,
        Estado: data.Estado,
      },
    });
    return facturaGuardada;
  } catch (error) {
    throw new Error('Error al guardar la factura: ' + error.message);
  }
};