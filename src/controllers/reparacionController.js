import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import {
  obtenerTodasReparacionesModelo,
  obtenerReparacionPorIdModelo, // Mantener si se usa en otras rutas para obtener por ID de reparación
  obtenerReparacionesPorClienteModelo, // <--- Esta es la función clave
  obtenerReparacionesPorTecnicoModelo,
  crearReparacionModelo,
  actualizarReparacionModelo,
  eliminarReparacionModelo,
} from "../models/modeloReparacion.js";
import { crearNotificacionModelo } from "../models/modeloNotificaciones.js";



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

    res.json({ data: reparaciones }); // Envuelve el array en un objeto 'data' si tu frontend lo espera así
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reparaciones", error: error.message });
  }
};

// Esta es la función que tu frontend llama con el ID del cliente
// a través de la ruta '/api/reparaciones/obtenerbyId/:id'
export const obtenerReparacionPorId = async (req, res) => {
  // El parámetro 'id' de la URL es en realidad el ID_Cliente en este contexto
  const idCliente = parseInt(req.params.id); 
  console.log(`Backend: Solicitando reparaciones para ID_Cliente: ${idCliente}`); // Log para depuración

  try {
    // Usamos la función de modelo que ya existe y busca por ID_Cliente
    const reparaciones = await obtenerReparacionesPorClienteModelo(idCliente);

    // Si no se encuentran reparaciones, devuelve un array vacío
    if (!reparaciones || reparaciones.length === 0) {
      console.log(`Backend: No se encontraron reparaciones para el cliente ${idCliente}. Devolviendo array vacío.`);
      return res.status(200).json([]); // Importante: siempre devolver un array
    }

    // Si se encuentran reparaciones, devuelve el array de reparaciones
    console.log(`Backend: Se encontraron ${reparaciones.length} reparaciones para el cliente ${idCliente}.`);
    return res.json(reparaciones); // Importante: devolver el array directamente
  } catch (error) {
    console.error(`Backend: Error al obtener reparaciones para el cliente ${idCliente}:`, error);
    res.status(500).json({ mensaje: "Error al obtener reparaciones", error: error.message });
  }
};

export const crearReparacion = async (req, res) => {
  const { nivel } = req.user;
  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para crear reparaciones" });
  }

  try {
    const { ID_Cliente, ID_Tecnico, ID_Equipo, Fecha_Ingreso, Fecha_Entrega, CostoServicio, IVA } = req.body;

    if (!ID_Cliente || !ID_Tecnico || !ID_Equipo || !Fecha_Ingreso || !Fecha_Entrega || !CostoServicio || !IVA) {
      return res.status(400).json({ mensaje: "Todos los campos son requeridos" });
    }

    const cliente = await prisma.tb_cliente.findUnique({ where: { ID_Cliente: parseInt(ID_Cliente) } });
    if (!cliente) {
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }
    const tecnico = await prisma.tb_tecnico.findUnique({ where: { ID_Tecnico: parseInt(ID_Tecnico) } });
    if (!tecnico) {
      return res.status(404).json({ mensaje: "Técnico no encontrado" });
    }
    const equipo = await prisma.tb_equipo.findUnique({ where: { ID_Equipo: parseInt(ID_Equipo) } });
    if (!equipo) {
      return res.status(404).json({ mensaje: "Equipo no encontrado" });
    }

    const Total = parseFloat(CostoServicio) + parseFloat(IVA);
    const nuevaReparacion = await crearReparacionModelo({
      ID_Cliente: parseInt(ID_Cliente),
      ID_Tecnico: parseInt(ID_Tecnico),
      ID_Equipo: parseInt(ID_Equipo),
      Fecha_Ingreso: new Date(Fecha_Ingreso),
      Fecha_Entrega: new Date(Fecha_Entrega),
      CostoServicio: parseFloat(CostoServicio),
      IVA: parseFloat(IVA),
      Total,
    });

    await prisma.tb_estado_reparacion.create({
      data: {
        ID_Reparacion: nuevaReparacion.ID_Reparacion,
        Estado: "Ingresado",
        Descripcion: "Reparación iniciada",
      },
    });

    await crearNotificacionModelo({
      ID_Cliente: parseInt(ID_Cliente),
      ID_Reparacion: nuevaReparacion.ID_Reparacion,
      Mensaje: `Se ha creado una nueva reparación (#${nuevaReparacion.ID_Reparacion}) para su equipo.`,
      Tipo: "Notificacion",
      Enviado: true, // Notificación informativa, no requiere aprobación
      Aprobado: null,
    });

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
    const { CostoServicio, IVA, Fecha_Entrega, ID_Tecnico } = req.body;
    const data = {
      ...(CostoServicio && { CostoServicio: parseFloat(CostoServicio) }),
      ...(IVA && { IVA: parseFloat(IVA) }),
      ...(CostoServicio && IVA && { Total: parseFloat(CostoServicio) + parseFloat(IVA) }),
      ...(Fecha_Entrega && { Fecha_Entrega: new Date(Fecha_Entrega) }),
      ...(ID_Tecnico && { ID_Tecnico: parseInt(ID_Tecnico) }),
    };

    if (ID_Tecnico) {
      const tecnico = await prisma.tb_tecnico.findUnique({ where: { ID_Tecnico: parseInt(ID_Tecnico) } });
      if (!tecnico) {
        return res.status(404).json({ mensaje: "Técnico no encontrado" });
      }
    }

    const reparacionActualizada = await actualizarReparacionModelo(id, data);

    await crearNotificacionModelo({
      ID_Cliente: reparacionActualizada.ID_Cliente,
      ID_Reparacion: id,
      Mensaje: `Se han actualizado los detalles de la reparación #${id}.`,
      Tipo: "Notificacion",
      Enviado: true,
      Aprobado: null,
    });

    res.json(reparacionActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar reparación", error: error.message });
  }
};

export const proponerCostoExtra = async (req, res) => {
  const { nivel } = req.user;
  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para proponer costo extra" });
  }

  try {
    const { ID_Reparacion, CostoExtra, Motivo } = req.body;

    if (!ID_Reparacion || !CostoExtra || !Motivo) {
      return res.status(400).json({ mensaje: "Todos los campos son requeridos" });
    }

    const reparacion = await prisma.tb_reparacion.findUnique({ where: { ID_Reparacion: parseInt(ID_Reparacion) } });
    if (!reparacion) {
      return res.status(404).json({ mensaje: "Reparación no encontrada" });
    }

    const notificacion = await crearNotificacionModelo({
      ID_Cliente: reparacion.ID_Cliente,
      ID_Reparacion: parseInt(ID_Reparacion),
      Mensaje: `Se solicita su aprobación para un costo extra de ${CostoExtra} en la reparación #${ID_Reparacion}. Motivo: ${Motivo}`,
      Tipo: "Notificacion",
      Tipo_Cambio: "CostoExtra",
      Datos_Cambio: { CostoExtra: parseFloat(CostoExtra) },
      Enviado: false,
      Aprobado: null,
    });

    res.status(201).json({ mensaje: "Notificación creada, pendiente de aprobación", notificacion });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al proponer costo extra", error: error.message });
  }
};

export const eliminarReparacion = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nivel } = req.user;

  if (nivel !== "Admin") {
    return res.status(403).json({ mensaje: "No autorizado para eliminar reparaciones" });
  }

  try {
    // Eliminar estados de la reparación
    await prisma.tb_estado_reparacion.deleteMany({
      where: { ID_Reparacion: id },
    });

    // Eliminar detalles de la reparación (si existe la tabla)
    await prisma.tb_detalle_reparacion_repuesto.deleteMany({
      where: { ID_Reparacion: id },
    });

    // Eliminar notificaciones relacionadas con la reparación
    await prisma.tb_notificacion.deleteMany({
      where: { ID_Reparacion: id },
    });

    // Finalmente, eliminar la reparación
    await eliminarReparacionModelo(id);
    res.json({ mensaje: "Reparación eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar reparación:", error);
    res.status(500).json({ mensaje: "Error al eliminar reparación", error: error.message });
  }
};

export const probarReparaciones = async (req, res) => {
  try {
    res.status(200).json({ message: "Funciona la funcion probarReparaciones" });
    console.log("Funciona la funcion probarReparaciones");
  } catch (error) {
    res.status(500).json({ mensaje: "Error en la función de prueba", error: error.message });
  }
};
