import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import {
  obtenerTodosEquiposModelo,
  obtenerEquipoPorIdModelo,
  obtenerEquiposPorClienteModelo,
  crearEquipoModelo,
  actualizarEquipoModelo,
  eliminarEquipoModelo,
} from "../models/modeloEquipo.js";

// Obtener todos los equipos (Admin o Técnico)
export const obtenerTodosEquipos = async (req, res) => {
  try {
    const equipos = await obtenerTodosEquiposModelo();
    res.json(equipos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los equipos", error: error.message });
  }
};

// Obtener equipo por ID
export const obtenerEquipoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const equipo = await obtenerEquipoPorIdModelo(parseInt(id));
    if (!equipo) return res.status(404).json({ mensaje: "Equipo no encontrado" });
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el equipo", error: error.message });
  }
};

// Obtener equipos de un cliente específico (Cliente puede ver solo sus equipos)
export const obtenerEquiposPorCliente = async (req, res) => {
  const idCliente = req.params.idCliente;
  const user = req.user;

  if (user.Usuario_nivel === "Cliente" && user.ID_Cliente !== parseInt(idCliente)) {
    return res.status(403).json({ mensaje: "Acceso denegado" });
  }

  try {
    const equipos = await obtenerEquiposPorClienteModelo(parseInt(idCliente));
    res.json(equipos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los equipos", error: error.message });
  }
};

// Crear equipo (Técnico o Admin)
export const crearEquipo = async (req, res) => {
  const { ID_Cliente, Nombre, Marca, Modelo, Descripcion_problema, Estado } = req.body;

  if (!ID_Cliente || !Nombre) {
    return res.status(400).json({ mensaje: "Faltan campos obligatorios (ID_Cliente y Nombre)" });
  }

  try {
    const nuevoEquipo = await crearEquipoModelo({
      ID_Cliente,
      Nombre,
      Marca,
      Modelo,
      Descripcion_problema,
      Estado: Estado || "Pendiente",
    });
    res.status(201).json(nuevoEquipo);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el equipo", error: error.message });
  }
};

// Actualizar equipo
export const actualizarEquipo = async (req, res) => {
  const { id } = req.params;
  try {
    const equipoActualizado = await actualizarEquipoModelo(parseInt(id), req.body);
    res.json(equipoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el equipo", error: error.message });
  }
};

// Eliminar equipo
export const eliminarEquipo = async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarEquipoModelo(parseInt(id));
    res.json({ mensaje: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el equipo", error: error.message });
  }
};


export const probarEquipo = async (req, res) => {
  try {
    res.status(200).json({ message: 'Funciona la funcion probarEquipo ' });
    console.log("Funciona la funcion probarEquipo ");
  } catch (error) {
    return res.status(500).json(response_error(`Error al iniciar sesión: ${error.message}`));
  }
}