import express from "express";
import {
  obtenerTodosTecnicos,
  obtenerTecnicoPorId,
  crearTecnico,
  actualizarTecnico,
  eliminarTecnico,
  probarTecnico
} from "../controllers/tecnicoController.js";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasTecnicos = express.Router();

rutasTecnicos.get("/test", probarTecnico);
// Obtener todos los técnicos (admin o técnico)
rutasTecnicos.get("/listar", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTodosTecnicos);


// Obtener técnico por ID (admin o técnico)
rutasTecnicos.get("/ObtenerById/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTecnicoPorId);

// Crear un técnico (solo admin)
rutasTecnicos.post("/crear", verificarToken, verificarRol(["Admin"]), crearTecnico);

// Actualizar técnico (solo admin)
rutasTecnicos.put("/actualizar/:id", verificarToken, verificarRol(["Admin"]), actualizarTecnico);

// Eliminar técnico (solo admin)
rutasTecnicos.delete("/eliminar/:id", verificarToken, verificarRol(["Admin"]), eliminarTecnico);

export default rutasTecnicos;
