// src/models/modeloTecnico.js

import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

// Obtener todos los técnicos
export const obtenerTecnicosModelo = async () => {
  return await prisma.tb_tecnico.findMany();
};

// Buscar técnico por ID
export const buscarTecnicoPorIdModelo = async (id) => {
  return await prisma.tb_tecnico.findUnique({
    where: { ID_Tecnico: id },
  });
};

// Crear un nuevo técnico
export const crearTecnicoModelo = async (data) => {
  const existente = await prisma.tb_tecnico.findFirst({
    where: { Cedula: data.Cedula },
  });
  if (existente) {
    throw new Error("La cédula ya está registrada");
  }

  return await prisma.tb_tecnico.create({ data });
};

// Actualizar un técnico existente
export const actualizarTecnicoModelo = async (id, data) => {
  return await prisma.tb_tecnico.update({
    where: { ID_Tecnico: id },
    data,
  });
};

// Eliminar un técnico por ID
export const eliminarTecnicoModelo = async (id) => {
  return await prisma.tb_tecnico.delete({
    where: { ID_Tecnico: id },
  });
};


