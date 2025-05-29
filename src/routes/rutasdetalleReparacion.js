import express from "express";
import { agregarRepuestoAReparacion, obtenerDetallesPorReparacion } from "../controllers/detalleReparacionController.js";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasDetalleReparacion = express.Router();

rutasDetalleReparacion.post("/agregar", verificarToken,verificarRol(["Admin", "Tecnico"]), agregarRepuestoAReparacion);

rutasDetalleReparacion.get("/repuestosReparacion/:idReparacion",
    verificarToken,verificarRol(["Admin", "Tecnico", "Cliente"]), 
    obtenerDetallesPorReparacion
);

export default rutasDetalleReparacion;
