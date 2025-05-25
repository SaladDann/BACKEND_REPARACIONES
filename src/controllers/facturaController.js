import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import { obtenerFacturaPorReparacion } from '../models/modeloFactura.js';

/**
 * Controlador para obtener la factura de una reparación específica.
 * Responde con JSON con toda la información para mostrar la factura.
 */
export const obtenerFacturaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const factura = await obtenerFacturaPorReparacion(id);

    if (!factura) {
      return res.status(404).json({ mensaje: 'Reparación no encontrada' });
    }

    return res.json(factura);
  } catch (error) {
    console.error('Error en obtenerFactura:', error);
    return res.status(500).json({ mensaje: 'Error al obtener factura' });
  }
};
