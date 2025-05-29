import express from "express";
import { enviarNotificacion, obtenerNotificacionesPorCliente, obtenerNotificacionesPorReparacion,
confirmarNotificacion, probarNotificaciones } from "../controllers/notificacionesController.js";

import { verificarToken, verificarRol } from "../middlewares/auth.js";

const rutasNotificaciones = express.Router();

rutasNotificaciones.get("/test", probarNotificaciones);
rutasNotificaciones.post("/enviar", verificarToken, verificarRol(["Admin", "Tecnico"]), enviarNotificacion);
rutasNotificaciones.get("/cliente/:idCliente", verificarToken, verificarRol(["Admin", "Cliente"]), obtenerNotificacionesPorCliente);
rutasNotificaciones.get("/reparacion/:idReparacion", verificarToken, verificarRol(["Admin", "Cliente", "Tecnico"]), obtenerNotificacionesPorReparacion);
rutasNotificaciones.put("/confirmar/:idNotificacion", verificarToken, verificarRol(["Cliente"]), confirmarNotificacion);

export default rutasNotificaciones;