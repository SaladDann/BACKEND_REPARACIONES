import { Router } from 'express';
import { verificarToken, verificarRol } from '../middlewares/auth.js';

import { probarUsuarios, registrarUsuario, obtenerUsuarios, obtenerUsuarioPorId,
actualizarUsuarioControlador, eliminarUsuarioControlador, cambiarEstadoUsuarioControlador
} from '../controllers/usuarioController.js';

const rutasUsuarios = Router();

rutasUsuarios.get('/probarUsuario', probarUsuarios);

rutasUsuarios.get('/obtenerUsuarios', verificarToken, verificarRol(['Admin']), obtenerUsuarios);
rutasUsuarios.get( '/obtenerUsuariosId/:id', verificarToken, verificarRol(['Admin', 'Cliente', 'Tecnico']),  obtenerUsuarioPorId);
rutasUsuarios.post('/crear', verificarToken, verificarRol(['Admin']), registrarUsuario);
rutasUsuarios.put('/actualizar/:id', verificarToken, verificarRol(['Admin', 'Cliente', 'Tecnico']), actualizarUsuarioControlador);
rutasUsuarios.delete( '/eliminar/:id', verificarToken, verificarRol(['Admin']), eliminarUsuarioControlador);
rutasUsuarios.patch( '/estado/:id/estado', verificarToken, verificarRol(['Admin']), cambiarEstadoUsuarioControlador);

export default rutasUsuarios;
