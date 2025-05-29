import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import { obtenerTodosRepuestosModelo, obtenerRepuestoPorIdModelo, crearRepuestoModelo, actualizarRepuestoModelo,
eliminarRepuestoModelo } from "../models/modeloRepuesto.js";

// Obtener todos los repuestos
export const obtenerTodosRepuestos = async (_req, res) => {
  try {
    const repuestos = await obtenerTodosRepuestosModelo();
    res.status(200).json(repuestos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los repuestos", error: error.message });
  }
};

// Obtener repuesto por ID
export const obtenerRepuestoPorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repuesto = await obtenerRepuestoPorIdModelo(id);
    if (!repuesto) {
      return res.status(404).json({ mensaje: "Repuesto no encontrado" });
    }
    res.status(200).json(repuesto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el repuesto", error: error.message });
  }
};

// Crear repuesto
export const crearRepuesto = async (req, res) => {
  try {
    const { Nombre, Precio } = req.body;

    if (!Nombre || !Precio) {
      return res.status(400).json({ mensaje: "Nombre y Precio son requeridos" });
    }

    const nuevoRepuesto = await crearRepuestoModelo({ Nombre, Precio });
    res.status(201).json(nuevoRepuesto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el repuesto", error: error.message });
  }
};

// Actualizar repuesto
export const actualizarRepuesto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { Nombre, Precio } = req.body;

    const repuestoExistente = await obtenerRepuestoPorIdModelo(id);
    if (!repuestoExistente) {
      return res.status(404).json({ mensaje: "Repuesto no encontrado" });
    }

    const repuestoActualizado = await actualizarRepuestoModelo(id, { Nombre, Precio });
    res.status(200).json(repuestoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el repuesto", error: error.message });
  }
};

// Eliminar repuesto
export const eliminarRepuesto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const repuestoExistente = await obtenerRepuestoPorIdModelo(id);
    if (!repuestoExistente) {
      return res.status(404).json({ mensaje: "Repuesto no encontrado" });
    }

    await eliminarRepuestoModelo(id);
    res.status(200).json({ mensaje: "Repuesto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el repuesto", error: error.message });
  }
};

// Endpoint de prueba
export const probarRepuesto = async (_req, res) => {
  try {
    res.status(200).json({ message: 'Funciona la funcion probarRepuesto' });
    console.log("Funciona la funcion probarRepuesto");
  } catch (error) {
    res.status(500).json({ mensaje: `Error: ${error.message}` });
  }
};