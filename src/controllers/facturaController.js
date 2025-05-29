import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import { obtenerFacturaPorReparacion, guardarFactura } from '../models/modeloFactura.js';

export const obtenerFacturaPorId = async (req, res) => {
  const { idReparacion } = req.params;

  try {
    const factura = await obtenerFacturaPorReparacion(idReparacion);

    if (!factura) {
      return res.status(404).json({ mensaje: 'Reparación no encontrada para generar factura' });
    }

    return res.json(factura);
  } catch (error) {
    console.error('Error al obtener factura:', error);
    return res.status(500).json({ mensaje: 'Error al obtener factura' });
  }
};

export const crearFactura = async (req, res) => {
  try {
    const nuevaFactura = await guardarFactura(req.body);
    return res.status(201).json({ mensaje: 'Factura creada exitosamente', data: nuevaFactura });
  } catch (error) {
    console.error('Error al crear la factura:', error);
    return res.status(500).json({ mensaje: 'Error al crear la factura' });
  }
};