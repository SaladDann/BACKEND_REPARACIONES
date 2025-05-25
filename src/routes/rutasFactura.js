// src/routes/rutasFactura.js
import { Router } from 'express';
import { obtenerFacturaPorId } from '../controllers/facturaController.js';

const rutasFacturas = Router();

rutasFacturas.get('/factura/:id', obtenerFacturaPorId );

export default rutasFacturas;
