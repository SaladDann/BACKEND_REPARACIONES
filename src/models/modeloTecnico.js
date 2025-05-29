import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const obtenerTecnicosModelo = async () => {
  return await prisma.tb_tecnico.findMany();
};

export const buscarTecnicoPorIdModelo = async (id) => {
  return await prisma.tb_tecnico.findUnique({
    where: { ID_Tecnico: id },
  });
};

export const crearTecnicoModelo = async (data) => {
  const existente = await prisma.tb_tecnico.findFirst({
    where: { Cedula: data.Cedula },
  });
  if (existente) {
    throw new Error("La cédula ya está registrada");
  }

  return await prisma.tb_tecnico.create({ data });
};

export const actualizarTecnicoModelo = async (id, data) => {
  return await prisma.tb_tecnico.update({
    where: { ID_Tecnico: id },
    data,
  });
};

export const eliminarTecnicoModelo = async (id) => {
  return await prisma.tb_tecnico.delete({
    where: { ID_Tecnico: id },
  });
};