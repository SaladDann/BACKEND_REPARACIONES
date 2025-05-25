import { Router } from 'express';
import {
  probarUsuarios,
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuarioControlador,
  eliminarUsuarioControlador,
  cambiarEstadoUsuarioControlador
} from '../controllers/usuarioController.js';

import { verificarToken, verificarRol } from '../middlewares/auth.js';

const rutasUsuarios = Router();

// Ruta de prueba pública
rutasUsuarios.get('/probarUsuario', probarUsuarios);

// Rutas protegidas (JWT + Roles)
// Obtener todos los usuarios (solo Admin)
rutasUsuarios.get('/obtenerUsuarios', verificarToken, verificarRol(['Admin']), obtenerUsuarios);

// Obtener usuario por ID (Admin o propio usuario)
rutasUsuarios.get( '/obtenerUsuariosId/:id', verificarToken, verificarRol(['Admin', 'Cliente', 'Tecnico']),  obtenerUsuarioPorId);

// Crear usuario (solo Admin)
rutasUsuarios.post('/crear', verificarToken, verificarRol(['Admin']), registrarUsuario);

// Actualizar usuario (Admin o propio usuario)
rutasUsuarios.put('/actualizar/:id', verificarToken, verificarRol(['Admin', 'Cliente', 'Tecnico']), actualizarUsuarioControlador);

// Eliminar usuario (solo Admin)
rutasUsuarios.delete( '/eliminar/:id', verificarToken, verificarRol(['Admin']), eliminarUsuarioControlador);

// Cambiar estado activo/inactivo usuario (solo Admin)
rutasUsuarios.patch( '/estado/:id/estado', verificarToken, verificarRol(['Admin']), cambiarEstadoUsuarioControlador);

export default rutasUsuarios;
