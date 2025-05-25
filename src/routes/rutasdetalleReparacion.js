import express from "express";
import { agregarRepuestoAReparacion, obtenerDetallesPorReparacion } from "../controllers/detalleReparacionController.js";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasDetalleReparacion = express.Router();

rutasDetalleReparacion.post("/agregar", verificarToken,verificarRol(["Admin", "Tecnico"]), agregarRepuestoAReparacion);

// (opcional) Obtener todos los repuestos de una reparación
rutasDetalleReparacion.get("/repuestosReparacion/:idReparacion", verificarToken,verificarRol(["Admin", "Tecnico", "Cliente"]), obtenerDetallesPorReparacion);

export default rutasDetalleReparacion;
