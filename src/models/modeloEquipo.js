import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

// Obtener todos los equipos
export const obtenerTodosEquiposModelo = async () => {
  return await prisma.tb_equipo.findMany();
};

// Obtener equipo por ID
export const obtenerEquipoPorIdModelo = async (id) => {
  return await prisma.tb_equipo.findUnique({
    where: { ID_Equipo: id },
  });
};

// Obtener equipos por cliente
export const obtenerEquiposPorClienteModelo = async (idCliente) => {
  return await prisma.tb_equipo.findMany({
    where: { ID_Cliente: idCliente },
  });
};

// Crear un nuevo equipo
export const crearEquipoModelo = async (data) => {
  return await prisma.tb_equipo.create({ data });
};

// Actualizar un equipo existente
export const actualizarEquipoModelo = async (id, data) => {
  return await prisma.tb_equipo.update({
    where: { ID_Equipo: id },
    data,
  });
};

// Eliminar un equipo
export const eliminarEquipoModelo = async (id) => {
  return await prisma.tb_equipo.delete({
    where: { ID_Equipo: id },
  });
};


