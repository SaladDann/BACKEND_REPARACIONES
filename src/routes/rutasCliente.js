import express from 'express';
import { verificarToken, verificarRol } from '../middlewares/auth.js';
import {
  listarClientes,
  obtenerCliente,
  registrarCliente,
  modificarCliente,
  borrarCliente,
  obtenerClientePorCedulaController,
  obtenerMiPerfilCliente,
  probarCliente,
} from '../controllers/clienteController.js';

const router = express.Router();
router.use(verificarToken);

// ruta de prueba
router.get('/test',probarCliente);

// Listar todos los clientes (Admin o Técnico)
router.get('/listarClientes', verificarRol(['Admin', 'Tecnico']), listarClientes);

// Obtener cliente por ID (Admin o Técnico)
router.get('/obtenerClienteId/:id', verificarRol(['Admin', 'Tecnico']), obtenerCliente);

// Obtener cliente por cédula (Admin o Técnico)
router.get('/cedula/:cedula', verificarRol(['Admin', 'Tecnico']), obtenerClientePorCedulaController);

// Crear cliente (Admin o Técnico)
router.post('/registar', verificarRol(['Admin', 'Tecnico']), registrarCliente);

// Actualizar cliente (Admin o Técnico)
router.put('/actualizar/:id', verificarRol(['Admin', 'Tecnico']), modificarCliente);

// Eliminar cliente (Solo Admin)
router.delete('/eliminar/:id', verificarRol(['Admin', 'Tecnico']), borrarCliente);

// Obener perfil del cliente logeado
router.get('/mi-perfil', verificarToken, verificarRol(['Cliente']), obtenerMiPerfilCliente);

export default router;
