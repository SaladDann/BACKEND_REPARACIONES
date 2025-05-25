import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import {
  obtenerTodasReparacionesModelo,
  obtenerReparacionPorIdModelo,
  obtenerReparacionesPorClienteModelo,
  obtenerReparacionesPorTecnicoModelo,
  crearReparacionModelo,
  actualizarReparacionModelo,
  eliminarReparacionModelo
} from "../models/modeloReparacion.js";

export const obtenerReparaciones = async (req, res) => {
  const { nivel, ID_Cliente, ID_Tecnico } = req.user;

  try {
    let reparaciones;
    if (nivel === "Admin") {
      reparaciones = await obtenerTodasReparacionesModelo();
    } else if (nivel === "Cliente") {
      reparaciones = await obtenerReparacionesPorClienteModelo(ID_Cliente);
    } else if (nivel === "Tecnico") {
      reparaciones = await obtenerReparacionesPorTecnicoModelo(ID_Tecnico);
    } else {
      return res.status(403).json({ mensaje: "No autorizado" });
    }

    res.json(reparaciones);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reparaciones", error: error.message });
  }
};

export const obtenerReparacionPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const reparacion = await obtenerReparacionPorIdModelo(id);
    if (!reparacion) {
      return res.status(404).json({ mensaje: "Reparación no encontrada" });
    }
    res.json(reparacion);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reparación", error: error.message });
  }
};

export const crearReparacion = async (req, res) => {
  const { nivel } = req.user;
  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para crear reparaciones" });
  }

  try {
    const nuevaReparacion = await crearReparacionModelo(req.body);
    res.status(201).json(nuevaReparacion);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear reparación", error: error.message });
  }
};

export const actualizarReparacion = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nivel } = req.user;

  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para actualizar reparaciones" });
  }

  try {
    const reparacionActualizada = await actualizarReparacionModelo(id, req.body);
    res.json(reparacionActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar reparación", error: error.message });
  }
};

export const eliminarReparacion = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nivel } = req.user;

  if (nivel !== "Admin") {
    return res.status(403).json({ mensaje: "No autorizado para eliminar reparaciones" });
  }

  try {
    await eliminarReparacionModelo(id);
    res.json({ mensaje: "Reparación eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar reparación", error: error.message });
  }
};


export const probarReparaciones = async (req, res) => {
  try {
    res.status(200).json({ message: 'Funciona la funcion probarReparaciones' });
    console.log("Funciona la funcion probarReparaciones");
  } catch (error) {
    return res.status(500).json(response_error(`Error: ${error.message}`));
  }
}