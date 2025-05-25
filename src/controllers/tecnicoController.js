import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import { obtenerTecnicosModelo, buscarTecnicoPorIdModelo, crearTecnicoModelo, actualizarTecnicoModelo, eliminarTecnicoModelo } from "../models/modeloTecnico.js";

import { buscarUsuarioPorId } from "../models/modeloUsuario.js";
import { response_success, response_created, response_not_found, response_error, response_bad_request } from "../responses/responses.js";

// Obtener todos los técnicos (solo Admin)
export const obtenerTodosTecnicos = async (req, res) => {
  try {
    if (req.user.nivel !== "Admin") {
      return res.status(403).json(response_bad_request("Acceso denegado"));
    }

    const tecnicos = await obtenerTecnicosModelo();
    return res.status(200).json(response_success(tecnicos, "Lista de técnicos obtenida"));
  } catch (error) {
    console.error('Error al obtener técnicos:', error);
    return res.status(500).json(response_error(`Error al obtener la lista de técnicos – ${error.message}`));
  }
};

// Obtener técnico por ID (Admin o el técnico autenticado)
export const obtenerTecnicoPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (req.user.nivel !== "Admin" && req.user.ID_Tecnico !== id) {
      return res.status(403).json(response_bad_request("Acceso denegado"));
    }

    const tecnico = await buscarTecnicoPorIdModelo(id);
    if (!tecnico) {
      return res.status(404).json(response_not_found("Técnico no encontrado"));
    }

    return res.status(200).json(response_success(tecnico, "Técnico obtenido exitosamente"));
  } catch (error) {
    console.error('Error al obtener técnico:', error);
    return res.status(500).json(response_error(`Error al obtener técnico – ${error.message}`));
  }
};

// Crear técnico (solo Admin)
export const crearTecnico = async (req, res) => {
  try {
    if (req.user.nivel !== "Admin") {
      return res.status(403).json(response_bad_request("Acceso denegado"));
    }

    const nuevoTecnico = await crearTecnicoModelo(req.body);
    return res.status(201).json(response_created(nuevoTecnico.ID_Tecnico, "Técnico creado exitosamente"));
  } catch (error) {
    console.error('Error al crear técnico:', error);
    return res.status(400).json(response_bad_request(`Error al crear técnico – ${error.message}`));
  }
};

// Actualizar técnico (solo Admin)
export const actualizarTecnico = async (req, res) => {
  try {
    if (req.user.nivel !== "Admin") {
      return res.status(403).json(response_bad_request("Acceso denegado"));
    }

    const id = parseInt(req.params.id);
    const tecnicoActualizado = await actualizarTecnicoModelo(id, req.body);
    return res.status(200).json(response_success(tecnicoActualizado, "Técnico actualizado exitosamente"));
  } catch (error) {
    console.error('Error al actualizar técnico:', error);
    return res.status(400).json(response_bad_request(`Error al actualizar técnico – ${error.message}`));
  }
};

// Eliminar técnico (solo Admin)
export const eliminarTecnico = async (req, res) => {
  try {
    if (req.user.nivel !== "Admin") {
      return res.status(403).json(response_bad_request("Acceso denegado"));
    }

    const id = parseInt(req.params.id);
    await eliminarTecnicoModelo(id);
    return res.status(200).json(response_success(null, "Técnico eliminado exitosamente"));
  } catch (error) {
    console.error('Error al eliminar técnico:', error);
    return res.status(400).json(response_bad_request(`Error al eliminar técnico – ${error.message}`));
  }
};

// Probar técnico
export const probarTecnico = async (req, res) => {
  try {
    return res.status(200).json(response_success(null, "Funciona la función probarTecnico"));
  } catch (error) {
    console.error('Error en probarTecnico:', error);
    return res.status(500).json(response_error(`Error: ${error.message}`));
  }
};