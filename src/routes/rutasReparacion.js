// routes/rutasReparacion.js
import express from "express";
import {
  obtenerReparaciones,
  obtenerReparacionPorId,
  crearReparacion,
  actualizarReparacion,
  eliminarReparacion,
  probarReparaciones
} from "../controllers/reparacionController.js";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasReparaciones = express.Router();

// Todas las rutas requieren estar autenticado
rutasReparaciones.use(verificarToken);

rutasReparaciones.use("/test", probarReparaciones);

// Obtener todas las reparaciones (visibilidad según rol)
rutasReparaciones.get("/listar", obtenerReparaciones);

// Obtener una reparación específica por ID
rutasReparaciones.get("/obtenerbyId/:id", obtenerReparacionPorId);

// Crear reparación (solo Admin o Técnico)
rutasReparaciones.post("/crear", verificarRol(["Admin", "Tecnico"]), crearReparacion);

// Actualizar reparación (solo Admin o Técnico)
rutasReparaciones.put("/actualizar/:id", verificarRol(["Admin", "Tecnico"]), actualizarReparacion);

// Eliminar reparación (solo Admin)
rutasReparaciones.delete("/eliminar/:id", verificarRol(["Admin"]), eliminarReparacion);

export default rutasReparaciones;
