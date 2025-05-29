import express from "express";
import { enviarNotificacion, obtenerNotificacionesPorCliente, obtenerNotificacionesPorReparacion,
confirmarNotificacion, probarNotificaciones } from "../controllers/notificacionesController.js";

import { verificarToken, verificarRol } from "../middlewares/auth.js";

const rutasNotificaciones = express.Router();

// Endpoint de prueba
rutasNotificaciones.get("/test", probarNotificaciones);

// Enviar notificación
rutasNotificaciones.post(
  "/enviar",
  verificarToken,
  verificarRol(["Admin", "Tecnico"]),
  enviarNotificacion
);

// Obtener notificaciones por cliente
rutasNotificaciones.get(
  "/cliente/:idCliente",
  verificarToken,
  verificarRol(["Admin", "Cliente"]),
  obtenerNotificacionesPorCliente
);

// Obtener notificaciones por reparación
rutasNotificaciones.get(
  "/reparacion/:idReparacion",
  verificarToken,
  verificarRol(["Admin", "Cliente", "Tecnico"]),
  obtenerNotificacionesPorReparacion
);

// Confirmar notificación
rutasNotificaciones.put(
  "/confirmar/:idNotificacion",
  verificarToken,
  verificarRol(["Cliente"]),
  confirmarNotificacion
);

export default rutasNotificaciones;