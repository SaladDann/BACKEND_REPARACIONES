import express from "express";
import { verificarToken, verificarRol } from "../middlewares/auth.js";

import { obtenerReparaciones, obtenerReparacionPorId, crearReparacion, actualizarReparacion,
eliminarReparacion, proponerCostoExtra, probarReparaciones} from "../controllers/reparacionController.js";

import { obtenerFacturaPorId, crearFactura } from '../controllers/facturaController.js';

const rutasReparaciones = express.Router();
rutasReparaciones.use(verificarToken);

rutasReparaciones.get("/test", probarReparaciones);
rutasReparaciones.get("/listar", obtenerReparaciones);
rutasReparaciones.get("/obtenerbyId/:id",verificarRol(["Admin", "Tecnico", "Cliente"]), obtenerReparacionPorId);
rutasReparaciones.post("/crear", verificarRol(["Admin", "Tecnico"]), crearReparacion);
rutasReparaciones.put("/actualizar/:id", verificarRol(["Admin", "Tecnico"]), actualizarReparacion);
rutasReparaciones.post("/costo-extra", verificarRol(["Admin", "Tecnico"]), proponerCostoExtra);
rutasReparaciones.delete("/eliminar/:id", verificarRol(["Admin","Tecnico"]), eliminarReparacion);

// Rutas para facturas
rutasReparaciones.get("/facturas/:idReparacion",verificarRol(["Admin","Tecnico"]), obtenerFacturaPorId);
rutasReparaciones.post("/facturas", verificarRol(["Admin", "Tecnico"]), crearFactura);

export default rutasReparaciones;