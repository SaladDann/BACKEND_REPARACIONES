import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import {
  obtenerTodosEstadosReparacionModelo,
  obtenerEstadosPorReparacionModelo,
  crearEstadoReparacionModelo,
  actualizarEstadoReparacionModelo,
  eliminarEstadoReparacionModelo,
} from "../models/modeloEstadoReparacion.js";

// Obtener todos los estados (Admin/Técnico)
export const obtenerTodosEstados = async (req, res) => {
  try {
    const estados = await obtenerTodosEstadosReparacionModelo();
    res.json(estados);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los estados", error: error.message });
  }
};

// Obtener estados por ID de reparación
export const obtenerEstadosPorReparacion = async (req, res) => {
  const { idReparacion } = req.params;
  try {
    const estados = await obtenerEstadosPorReparacionModelo(parseInt(idReparacion));
    res.json(estados);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener estados por reparación", error: error.message });
  }
};

// Crear nuevo estado (Técnico)
export const crearEstadoReparacion = async (req, res) => {
  try {
    const estado = await crearEstadoReparacionModelo(req.body);
    res.status(201).json(estado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el estado", error: error.message });
  }
};

// Actualizar estado (ej. Aprobación por Cliente o corrección por Técnico)
export const actualizarEstadoReparacion = async (req, res) => {
  const { id } = req.params;
  try {
    const estadoActualizado = await actualizarEstadoReparacionModelo(parseInt(id), req.body);
    res.json(estadoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar el estado", error: error.message });
  }
};

// Eliminar un estado de reparación (Admin si aplica)
export const eliminarEstadoReparacion = async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarEstadoReparacionModelo(parseInt(id));
    res.json({ mensaje: "Estado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el estado", error: error.message });
  }
};

export const probarEstadoReparaciones = async (req, res) => {
  try {
    res.status(200).json({ message: 'Funciona la funcion probarEstadoReparaciones'});
    console.log("Funciona la funcion probarEstadoReparaciones");
  } catch (error) {
    return res.status(500).json(response_error(`Error: ${error.message}`));
  }
}