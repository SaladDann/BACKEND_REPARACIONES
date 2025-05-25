import express from "express";
import {
  obtenerTodosEstados,
  obtenerEstadosPorReparacion,
  crearEstadoReparacion,
  actualizarEstadoReparacion,
  eliminarEstadoReparacion,
  probarEstadoReparaciones,
} from "../controllers/estadoReparacionController.js";

import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasEstadoReparaciones = express.Router();

rutasEstadoReparaciones.get("/test",probarEstadoReparaciones);

// Obtener todos los estados (solo Admin o Técnico)
rutasEstadoReparaciones.get("/listarEstadoReparacion", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTodosEstados);

// Obtener estados por ID de reparación (Cliente, Técnico, Admin)
rutasEstadoReparaciones.get("/obtenerEstadoReparacionId/:idReparacion", verificarToken, verificarRol(["Cliente", "Tecnico", "Admin"]), obtenerEstadosPorReparacion);

// Crear nuevo estado (solo Técnico)
rutasEstadoReparaciones.post("/crear", verificarToken, verificarRol(["Tecnico", "Admin"]), crearEstadoReparacion);

// Actualizar estado (Técnico para modificar, Cliente para aprobar)
rutasEstadoReparaciones.put("/actualizar/:id", verificarToken, verificarRol(["Cliente", "Tecnico", "Admin"]), actualizarEstadoReparacion);

// Eliminar estado (solo Admin)
rutasEstadoReparaciones.delete("/eliminar/:id", verificarToken, verificarRol(["Admin"]), eliminarEstadoReparacion);

export default rutasEstadoReparaciones;
