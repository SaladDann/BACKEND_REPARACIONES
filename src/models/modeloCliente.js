import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

// Buscar cliente por ID
export const obtenerClientePorId = async (id) => {
  return await prisma.tb_cliente.findUnique({
    where: { ID_Cliente: id },
    include: {
      equipos: true,
      reparaciones: true,
      usuarios: true,
    },
  });
};

// Buscar cliente por Cédula
export const obtenerClientePorCedula = async (cedula) => {
  return await prisma.tb_cliente.findFirst({
    where: { Cedula: cedula },
  });
};

// Obtener todos los clientes
export const obtenerTodosLosClientes = async () => {
  return await prisma.tb_cliente.findMany({
    include: {
      equipos: true,
    },
  });
};

// Crear nuevo cliente
export const crearCliente = async (data) => {
  const clienteExistente = await prisma.tb_cliente.findFirst({
    where: { Cedula: data.Cedula },
  });

  if (clienteExistente) {
    throw new Error("La cédula ya está registrada.");
  }
  return await prisma.tb_cliente.create({ data });
};

// Actualizar cliente
export const actualizarCliente = async (id, data) => {
  const { Cedula, ID_Cliente, ...datosActualizados } = data;
  return await prisma.tb_cliente.update({
    where: { ID_Cliente: id },
    data: datosActualizados,
  });
};

// Eliminar cliente
export const eliminarCliente = async (id) => {
  return await prisma.tb_cliente.delete({
    where: { ID_Cliente: id },
  });
};