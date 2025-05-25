import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import { response_success, response_created, response_not_found, response_error,  response_bad_request } from '../responses/responses.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { 
  buscarUsuarioPorNombre, crearUsuario, 
  buscarUsuarioPorId, actualizarUsuario, 
  eliminarUsuario, obtenerTodosUsuarios, 
  cambiarEstadoActivoUsuario 
} from '../models/modeloUsuario.js';

const SALT_ROUNDS = 10;
const ROLES_PERMITIDOS = ['Cliente', 'Tecnico', 'Admin'];

// Login
export const iniciarSesion = async (req, res) => {
  const { username, password } = req.body;
  try {
    const usuario = await buscarUsuarioPorNombre(username);
    if (!usuario) 
      return res.status(404).json(response_not_found('Usuario no encontrado'));

    if (!usuario.Usuario_activo) 
      return res.status(403).json(response_bad_request('Usuario inactivo'));

    const coincide = await bcrypt.compare(password, usuario.Usuario_Password);
    if (!coincide) 
      return res.status(401).json(response_bad_request('Contraseña incorrecta'));

    const token = jwt.sign(
      { id: usuario.ID_Usuario, nivel: usuario.Usuario_nivel },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json(response_success({
      token,
      usuario: {
        id: usuario.ID_Usuario,
        username: usuario.Usuario_Name,
        nivel: usuario.Usuario_nivel
      }
    }, 'Inicio de sesión exitoso'));
  } catch (error) {
    return res.status(500).json(response_error('Error en inicio de sesión'));
  }
};



//crear usuario
export const registrarUsuario = async (req, res) => {
  const { username, password, nivel, ID_Cliente, ID_Tecnico } = req.body;

  try {
    // Validar campos obligatorios
    if (!username || !password || !nivel) {
      return res.status(400).json(response_bad_request('Faltan campos obligatorios: username, password, nivel'));
    }

    // Validar que nivel sea válido
    if (!ROLES_PERMITIDOS.includes(nivel)) {
      return res.status(400).json(response_bad_request(`El nivel debe ser uno de: ${ROLES_PERMITIDOS.join(', ')}`));
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = await buscarUsuarioPorNombre(username);
    if (usuarioExistente) {
      return res.status(400).json(response_bad_request('Usuario ya existe'));
    }

    // Validar que ID_Cliente y ID_Tecnico existan (si se proporcionan)
    if (ID_Cliente) {
      const cliente = await prisma.tb_cliente.findUnique({ where: { ID_Cliente } });
      if (!cliente) {
        return res.status(400).json(response_bad_request('El ID_Cliente proporcionado no existe'));
      }
    }
    if (ID_Tecnico) {
      const tecnico = await prisma.tb_tecnico.findUnique({ where: { ID_Tecnico } });
      if (!tecnico) {
        return res.status(400).json(response_bad_request('El ID_Tecnico proporcionado no existe'));
      }
    }

    // Encriptar contraseña
    const passwordHasheado = await bcrypt.hash(password, SALT_ROUNDS);

    // Crear usuario
    const nuevoUsuario = await crearUsuario({
      Usuario_Name: username,
      Usuario_Password: passwordHasheado,
      Usuario_nivel: nivel,
      ID_Cliente: ID_Cliente || null,
      ID_Tecnico: ID_Tecnico || null,
      Usuario_activo: true,
    });

    return res.status(201).json(response_created(nuevoUsuario.ID_Usuario, 'Usuario creado correctamente'));
  } catch (error) {
    console.error('Error al crear usuario:', error.message, error.stack);
    return res.status(500).json(response_error(`Error al crear usuario: ${error.message}`));
  }
};

// Obtener todos los usuarios (solo admin)
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await obtenerTodosUsuarios();
    return res.json(response_success(usuarios, 'Lista de usuarios obtenida'));
  } catch (error) {
    return res.status(500).json(response_error('Error al obtener usuarios'));
  }
};

// Obtener usuario por ID (admin o usuario mismo)
export const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  const solicitante = req.user;

  try {
    if (solicitante.nivel !== 'Admin' && solicitante.id !== Number(id)) {
      return res.status(403).json(response_bad_request('Acceso denegado'));
    }

    const usuario = await buscarUsuarioPorId(Number(id));
    if (!usuario) return res.status(404).json(response_not_found('Usuario no encontrado'));

    return res.json(response_success(usuario, 'Usuario encontrado'));
  } catch (error) {
    return res.status(500).json(response_error('Error al obtener usuario'));
  }
};

// Actualizar usuario (admin o usuario mismo)
export const actualizarUsuarioControlador = async (req, res) => {
  const { id } = req.params;
  const solicitante = req.user;
  const { username, password, nivel, ID_Cliente, ID_Tecnico, Usuario_activo } = req.body;

  try {
    if (solicitante.nivel !== 'Admin' && solicitante.id !== Number(id)) {
      return res.status(403).json(response_bad_request('Acceso denegado'));
    }

    // Validar campos obligatorios
    if (!username || !nivel) {
      return res.status(400).json(response_bad_request('Faltan campos obligatorios: username, nivel'));
    }

    // Validar que nivel sea válido
    if (!ROLES_PERMITIDOS.includes(nivel)) {
      return res.status(400).json(response_bad_request(`El nivel debe ser uno de: ${ROLES_PERMITIDOS.join(', ')}`));
    }

    // Validar que ID_Cliente y ID_Tecnico existan (si se proporcionan)
    if (ID_Cliente) {
      const cliente = await prisma.tb_cliente.findUnique({ where: { ID_Cliente } });
      if (!cliente) {
        return res.status(400).json(response_bad_request('El ID_Cliente proporcionado no existe'));
      }
    }
    if (ID_Tecnico) {
      const tecnico = await prisma.tb_tecnico.findUnique({ where: { ID_Tecnico } });
      if (!tecnico) {
        return res.status(400).json(response_bad_request('El ID_Tecnico proporcionado no existe'));
      }
    }

    // Preparar datos para actualizar
    const datosActualizar = {
      Usuario_Name: username,
      Usuario_nivel: nivel,
      ID_Cliente: ID_Cliente || null,
      ID_Tecnico: ID_Tecnico || null,
    };

    if (password) {
      datosActualizar.Usuario_Password = await bcrypt.hash(password, SALT_ROUNDS);
    }

    if (typeof Usuario_activo !== 'undefined') {
      datosActualizar.Usuario_activo = Usuario_activo;
    }

    const usuarioActualizado = await actualizarUsuario(Number(id), datosActualizar);
    return res.json(response_success(usuarioActualizado, 'Usuario actualizado correctamente'));
  } catch (error) {
    console.error('Error al actualizar usuario:', error.message, error.stack);
    return res.status(500).json(response_error(`Error al actualizar usuario: ${error.message}`));
  }
};

// Eliminar usuario (solo admin)
export const eliminarUsuarioControlador = async (req, res) => {
  const { id } = req.params;

  try {
    await eliminarUsuario(Number(id));
    return res.json(response_success(null, 'Usuario eliminado correctamente'));
  } catch (error) {
    return res.status(500).json(response_error('Error al eliminar usuario'));
  }
};

// Cambiar estado activo/inactivo usuario (solo admin)
export const cambiarEstadoUsuarioControlador = async (req, res) => {
  const { id } = req.params;
  const { activo } = req.body;

  try {
    const usuario = await cambiarEstadoActivoUsuario(Number(id), activo);
    return res.json(response_success(usuario, 'Estado del usuario actualizado'));
  } catch (error) {
    return res.status(500).json(response_error('Error al cambiar estado del usuario'));
  }
};

/* Función para probar la conexión o funcionalidad usuario */
export const probarUsuarios = async (req, res) => {
  try {
    res.status(200).json(response_success(null, 'Funciona el controlador Usuario'));
    console.log("Funciona el controlador Usuario");
  } catch (error) {
    return res.status(500).json(response_error(`Error en probar: ${error.message}`));
  }
};
