import { db_pool_connection} from "../database/db.js";
import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export const buscarUsuarioPorNombre = async (username) => {
  return await prisma.tb_usuario.findUnique({
    where: { Usuario_Name: username },
  });
};

export const buscarUsuarioPorId = async (id) => {
  return await prisma.tb_usuario.findUnique({
    where: { ID_Usuario: id },
  });
};

export const obtenerTodosUsuarios = async () => {
  return await prisma.tb_usuario.findMany();
};

export const cambiarEstadoActivoUsuario = async (id, activo) => {
  return await prisma.tb_usuario.update({
    where: { ID_Usuario: id },
    data: { Usuario_activo: activo },
  });
};

export const crearUsuario = async (data) => {
  return await prisma.tb_usuario.create({ data });
};

export const actualizarUsuario = async (id, data) => {
  const { ID_Usuario, ...updateData } = data;

  return await prisma.tb_usuario.update({
    where: { ID_Usuario: id },
    data: {
      ...(data.Usuario_Name !== undefined && { Usuario_Name: data.Usuario_Name }),
      ...updateData 
    },
  });
};


export const eliminarUsuario = async (id) => {
  return await prisma.tb_usuario.delete({
    where: { ID_Usuario: id },
  });
};

