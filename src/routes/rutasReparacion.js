import express from "express";
import {
  obtenerReparaciones,
  obtenerReparacionPorId,
  crearReparacion,
  actualizarReparacion,
  eliminarReparacion,
  proponerCostoExtra,
  probarReparaciones,
} from "../controllers/reparacionController.js";
import { verificarToken, verificarRol } from "../middlewares/auth.js";

const rutasReparaciones = express.Router();

rutasReparaciones.use(verificarToken);

rutasReparaciones.get("/test", probarReparaciones);
rutasReparaciones.get("/listar", obtenerReparaciones);
rutasReparaciones.get("/obtenerbyId/:id",verificarRol(["Admin", "Tecnico", "Cliente"]), obtenerReparacionPorId);
rutasReparaciones.post("/crear", verificarRol(["Admin", "Tecnico"]), crearReparacion);
rutasReparaciones.put("/actualizar/:id", verificarRol(["Admin", "Tecnico"]), actualizarReparacion);
rutasReparaciones.post("/costo-extra", verificarRol(["Admin", "Tecnico"]), proponerCostoExtra);
rutasReparaciones.delete("/eliminar/:id", verificarRol(["Admin","Tecnico"]), eliminarReparacion);

export default rutasReparaciones;