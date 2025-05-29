import express from "express";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

import { obtenerTodosRepuestos, obtenerRepuestoPorId, crearRepuesto,
actualizarRepuesto, eliminarRepuesto, probarRepuesto} from "../controllers/repuestoController.js";

const rutasRepuestos = express.Router();

// Rutas públicas para usuarios autenticados
rutasRepuestos.get("/test", probarRepuesto);
rutasRepuestos.get("/listar", verificarToken, obtenerTodosRepuestos);
rutasRepuestos.get("/obternerporid/:id", verificarToken, obtenerRepuestoPorId);

// Rutas protegidas para Admin y Técnico
rutasRepuestos.post("/crear", verificarToken, verificarRol(["Admin", "Tecnico"]), crearRepuesto);
rutasRepuestos.put("/actualizar/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), actualizarRepuesto);
rutasRepuestos.delete("/eliminar/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), eliminarRepuesto);

export default rutasRepuestos;
