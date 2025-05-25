// routes/rutasEquipo.js
import express from "express";
import {
  obtenerTodosEquipos,
  obtenerEquipoPorId,
  obtenerEquiposPorCliente,
  crearEquipo,
  actualizarEquipo,
  eliminarEquipo,
  probarEquipo
} from "../controllers/equipoController.js";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasEquipos = express.Router();

rutasEquipos.get("/test", probarEquipo);

// Obtener todos los equipos (Admin y Técnico)
rutasEquipos.get("/obtenerEquipos", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTodosEquipos);

// Obtener equipo por ID (Admin y Técnico)
rutasEquipos.get( "/obtenerEquiposId/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerEquipoPorId);

// Obtener todos los equipos de un cliente
// Clientes solo pueden ver sus propios equipos
// Técnicos y Admins pueden ver todos los equipos de cualquier cliente
rutasEquipos.get("/obtenerEquiposCliente/:idCliente", verificarToken, verificarRol(["Cliente", "Tecnico", "Admin"]), obtenerEquiposPorCliente);

// Crear equipo (Técnico y Admin)
rutasEquipos.post( "/crear", verificarToken, verificarRol(["Admin", "Tecnico"]), crearEquipo);

// Actualizar equipo (Técnico y Admin)
rutasEquipos.put("/actualizar/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), actualizarEquipo);

// Eliminar equipo (Técnico y Admin)
rutasEquipos.delete("/eliminar/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), eliminarEquipo);

export default rutasEquipos;
