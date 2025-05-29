import express from "express";
import { obtenerTodosEstados, obtenerEstadosPorReparacion, crearEstadoReparacion,
actualizarEstadoReparacion, eliminarEstadoReparacion, probarEstadoReparaciones
} from "../controllers/estadoReparacionController.js";

import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasEstadoReparaciones = express.Router();

rutasEstadoReparaciones.get("/test",probarEstadoReparaciones);//ruta de prueba

rutasEstadoReparaciones.get("/listarEstadoReparacion", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTodosEstados);
rutasEstadoReparaciones.get("/obtenerEstadoReparacionId/:idReparacion", verificarToken, verificarRol(["Cliente", "Tecnico", "Admin"]), obtenerEstadosPorReparacion);
rutasEstadoReparaciones.post("/crear", verificarToken, verificarRol(["Tecnico", "Admin"]), crearEstadoReparacion);
rutasEstadoReparaciones.put("/actualizar/:id", verificarToken, verificarRol(["Cliente", "Tecnico", "Admin"]), actualizarEstadoReparacion);
rutasEstadoReparaciones.delete("/eliminar/:id", verificarToken, verificarRol(["Admin"]), eliminarEstadoReparacion);

export default rutasEstadoReparaciones;
