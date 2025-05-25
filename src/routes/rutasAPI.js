import { Router } from "express";
import { probarLogin, login } from "../controllers/loginController.js";

import rutasLogin from "./rutasLogin.js";
import rutasUsuarios from "./rutasUsuario.js";
import rutasClientes from "./rutasCliente.js";
import rutasTecnicos from "./rutasTecnico.js"
import rutasEquipos from "./rutasEquipo.js";
import rutasReparaciones from "./rutasReparacion.js";
import rutasEstadoReparaciones from "./rutasEstadoReparacion.js";
import rutasRepuestos from "./rutasRepuesto.js";
import rutasDetalleReparacion from "./rutasdetalleReparacion.js"
import rutasFacturas from "./rutasFactura.js";

const router = new Router();

// Montamos rutas
router.use('/login', rutasLogin);
router.use('/usuarios', rutasUsuarios);
router.use('/clientes', rutasClientes);
router.use('/tecnicos', rutasTecnicos);
router.use('/equipos', rutasEquipos);
router.use('/reparaciones', rutasReparaciones);
router.use('/estadoReparaciones', rutasEstadoReparaciones);
router.use('/repuestos', rutasRepuestos);
router.use('/detalles-reparacion',rutasDetalleReparacion)
router.use('/factura', rutasFacturas)

// Rutas de prueba genérica
router.get('/probarRutas', probarLogin);

router.get('/test', (req, res) => {
  res.json({ message: 'Ruta de test prueba activa' });
  console.log('Ruta de test prueba activa');
});

console.log("*** Rutas API cargadas ***");

export default router;
