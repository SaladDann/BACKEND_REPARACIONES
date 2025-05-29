import express from 'express';
import { verificarToken, verificarRol } from '../middlewares/auth.js';

import { listarClientes, obtenerCliente, registrarCliente, modificarCliente,
borrarCliente, obtenerClientePorCedulaController, obtenerMiPerfilCliente,
probarCliente } from '../controllers/clienteController.js';

const router = express.Router();
router.use(verificarToken);

// ruta de prueba
router.get('/test',probarCliente);

router.get('/listarClientes', verificarRol(['Admin', 'Tecnico']), listarClientes);
router.get('/obtenerClienteId/:id', verificarRol(['Admin', 'Tecnico']), obtenerCliente);
router.get('/cedula/:cedula', verificarRol(['Admin', 'Tecnico']), obtenerClientePorCedulaController);
router.post('/registar', verificarRol(['Admin', 'Tecnico']), registrarCliente);
router.put('/actualizar/:id', verificarRol(['Admin', 'Tecnico']), modificarCliente);
router.delete('/eliminar/:id', verificarRol(['Admin', 'Tecnico']), borrarCliente);
router.get('/mi-perfil', verificarToken, verificarRol(['Cliente']), obtenerMiPerfilCliente);

export default router;
