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

// Todas las rutas requieren autenticación
router.use(verificarToken);

// GET – Listar todos los clientes (Admin o Técnico)
router.get('/listarClientes', verificarRol(['Admin', 'Tecnico']), listarClientes);

// GET – Obtener cliente por ID (Admin o Técnico)
router.get('/obtenerClienteId/:id', verificarRol(['Admin', 'Tecnico']), obtenerCliente);

// GET – Obtener cliente por cédula (Admin o Técnico)
router.get('/cedula/:cedula', verificarRol(['Admin', 'Tecnico']), obtenerClientePorCedulaController);

// POST – Crear cliente (Admin o Técnico)
router.post('/registar', verificarRol(['Admin', 'Tecnico']), registrarCliente);

// PUT – Actualizar cliente (Admin o Técnico)
router.put('/actualizar/:id', verificarRol(['Admin', 'Tecnico']), modificarCliente);

// DELETE – Eliminar cliente (Solo Admin, si decides permitirlo)
router.delete('/eliminar/:id', verificarRol(['Admin']), borrarCliente);

router.get('/mi-perfil', verificarToken, verificarRol(['Cliente']), obtenerMiPerfilCliente);

router.get('/test',probarCliente);

export default router;
