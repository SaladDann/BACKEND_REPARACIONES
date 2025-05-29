import express from "express";

import { obtenerTodosEquipos, obtenerEquipoPorId, obtenerEquiposPorCliente, crearEquipo,
actualizarEquipo, eliminarEquipo,  probarEquipo } from "../controllers/equipoController.js";

import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasEquipos = express.Router();

rutasEquipos.get("/test", probarEquipo);


rutasEquipos.get("/obtenerEquipos", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerTodosEquipos);
rutasEquipos.get( "/obtenerEquiposId/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), obtenerEquipoPorId);

rutasEquipos.get("/obtenerEquiposCliente/:idCliente", verificarToken,
  verificarRol(["Cliente", "Tecnico", "Admin"]), obtenerEquiposPorCliente
);

rutasEquipos.post( "/crear", verificarToken, verificarRol(["Admin", "Tecnico"]), crearEquipo);
rutasEquipos.put("/actualizar/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), actualizarEquipo);
rutasEquipos.delete("/eliminar/:id", verificarToken, verificarRol(["Admin", "Tecnico"]), eliminarEquipo);

export default rutasEquipos;
