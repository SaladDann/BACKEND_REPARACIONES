import express from "express";
import { verificarToken, verificarRol } from '../middlewares/auth.js';

import { obtenerTodosTecnicos, obtenerTecnicoPorId, crearTecnico,
actualizarTecnico, eliminarTecnico, probarTecnico } from "../controllers/tecnicoController.js";

const rutasTecnicos = express.Router();

rutasTecnicos.get("/test", probarTecnico);

rutasTecnicos.get("/listar", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTodosTecnicos);
rutasTecnicos.get("/ObtenerById/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTecnicoPorId);
rutasTecnicos.post("/crear", verificarToken, verificarRol(["Admin"]), crearTecnico);
rutasTecnicos.put("/actualizar/:id", verificarToken, verificarRol(["Admin"]), actualizarTecnico);
rutasTecnicos.delete("/eliminar/:id", verificarToken, verificarRol(["Admin"]), eliminarTecnico);

export default rutasTecnicos;
