import { PrismaClient } from "../generated/prisma/client.js";
import { response_success, response_created,response_not_found, response_error,  
response_bad_request } from '../responses/responses.js';

import { obtenerTodosLosClientes, obtenerClientePorId,  obtenerClientePorCedula,
crearCliente, actualizarCliente, eliminarCliente } from '../models/modeloCliente.js';

const prisma = new PrismaClient();

// Listar todos los clientes
export const listarClientes = async (_req, res) => {
  try {
    const clientes = await obtenerTodosLosClientes();
    return res.status(200).json(response_success(clientes, 'Lista de clientes'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al obtener clientes – ${err.message}`));
  }
};

// Obtener cliente por ID
export const obtenerCliente = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const cliente = await obtenerClientePorId(id);
    if (!cliente) {
      return res.status(404).json(response_not_found('Cliente no encontrado'));
    }
    return res.status(200).json(response_success(cliente, 'Cliente encontrado'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al obtener cliente – ${err.message}`));
  }
};

// Registrar nuevo cliente
export const registrarCliente = async (req, res) => {
  const { Cedula, Nombres, Apellidos, Telefono, Email, Direccion } = req.body;

  if (!Cedula || !Nombres || !Apellidos) {
    return res.status(400).json(response_bad_request('Campos obligatorios faltantes'));
  }

  try {
    const nuevoCliente = await crearCliente({ Cedula, Nombres, Apellidos, Telefono, Email, Direccion });
    return res.status(201).json(response_created(nuevoCliente.ID_Cliente, 'Cliente creado correctamente'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al registrar cliente – ${err.message}`));
  }
};

// Modificar cliente existente
export const modificarCliente = async (req, res) => {
  const id = Number(req.params.id);
  const { Cedula, Nombres, Apellidos, Telefono, Email, Direccion } = req.body;

  try {
    const clienteExistente = await obtenerClientePorId(id);
    if (!clienteExistente) {
      return res.status(404).json(response_not_found('Cliente no encontrado'));
    }

    const clienteActualizado = await actualizarCliente(id, { Cedula, Nombres, Apellidos, Telefono, Email, Direccion });
    return res.status(200).json(response_success(clienteActualizado, 'Cliente actualizado correctamente'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al actualizar cliente – ${err.message}`));
  }
};

// Eliminar cliente
export const borrarCliente = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const clienteExistente = await obtenerClientePorId(id);
    if (!clienteExistente) {
      return res.status(404).json(response_not_found('Cliente no encontrado'));
    }

    await eliminarCliente(id);
    return res.status(200).json(response_success(null, 'Cliente eliminado correctamente'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al eliminar cliente – ${err.message}`));
  }
};

// Obtener cliente por cédula
export const obtenerClientePorCedulaController = async (req, res) => {
  const { cedula } = req.params;
  try {
    const cliente = await obtenerClientePorCedula(cedula);
    if (!cliente) {
      return res.status(404).json(response_not_found('Cliente no encontrado'));
    }
    return res.status(200).json(response_success(cliente, 'Cliente encontrado'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al buscar cliente – ${err.message}`));
  }
};

// Obtener perfil del cliente asociado al usuario autenticado
export const obtenerMiPerfilCliente = async (req, res) => {
  const idUsuario = req.user.id;
  try {
    const cliente = await prisma.tb_usuario.findUnique({
      where: { ID_Usuario: idUsuario },
      include: { cliente: true },
    });

    if (!cliente || !cliente.cliente) {
      return res.status(404).json(response_not_found('Cliente no encontrado o no asociado'));
    }
    return res.status(200).json(response_success(cliente.cliente, 'Perfil del cliente'));
  } catch (err) {
    return res.status(500).json(response_error(`Error al obtener perfil – ${err.message}`));
  }
};

// Endpoint de prueba
export const probarCliente = async (_req, res) => {
  try {
    res.status(200).json({ message: 'Funciona la funcion probarCliente' });
    console.log("Funciona la funcion probarCliente");
  } catch (error) {
    return res.status(500).json(response_error(`Error al iniciar sesión: ${error.message}`));
  }
};