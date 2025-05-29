import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

import { obtenerTodasReparacionesModelo, obtenerReparacionPorIdModelo, obtenerReparacionesPorClienteModelo,
obtenerReparacionesPorTecnicoModelo, crearReparacionModelo, actualizarReparacionModelo,
eliminarReparacionModelo } from "../models/modeloReparacion.js";

import { crearNotificacionModelo } from "../models/modeloNotificaciones.js";

// Obtener reparaciones dependiendo del usuario
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
    res.json({ data: reparaciones });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reparaciones", error: error.message });
  }
};

// Obtener reparaciones por ID de cliente
export const obtenerReparacionPorId = async (req, res) => {
  const idCliente = parseInt(req.params.id);
  console.log(`Backend: Solicitando reparaciones para ID_Cliente: ${idCliente}`);

  try {
    const reparaciones = await obtenerReparacionesPorClienteModelo(idCliente);
    if (!reparaciones || reparaciones.length === 0) {
      console.log(`Backend: No se encontraron reparaciones para el cliente ${idCliente}. Devolviendo array vacío.`);
      return res.status(200).json([]);
    }
    console.log(`Backend: Se encontraron ${reparaciones.length} reparaciones para el cliente ${idCliente}.`);
    return res.json(reparaciones);
  } catch (error) {
    console.error(`Backend: Error al obtener reparaciones para el cliente ${idCliente}:`, error);
    res.status(500).json({ mensaje: "Error al obtener reparaciones", error: error.message });
  }
};

// Crear una nueva reparación
export const crearReparacion = async (req, res) => {
  const { nivel } = req.user;
  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para crear reparaciones" });
  }

  try {
    const { ID_Cliente, ID_Tecnico, ID_Equipo, Fecha_Ingreso, Fecha_Entrega, CostoServicio, IVA } = req.body;

    if (!ID_Cliente || !ID_Tecnico || !ID_Equipo || !Fecha_Ingreso || !Fecha_Entrega || !CostoServicio || IVA === undefined) {
      return res.status(400).json({ mensaje: "Todos los campos son requeridos, incluyendo IVA" });
    }

    // Validacion de existencia
    const cliente = await prisma.tb_cliente.findUnique({ where: { ID_Cliente: parseInt(ID_Cliente) } });
    if (!cliente) return res.status(404).json({ mensaje: "Cliente no encontrado" });

    const tecnico = await prisma.tb_tecnico.findUnique({ where: { ID_Tecnico: parseInt(ID_Tecnico) } });
    if (!tecnico) return res.status(404).json({ mensaje: "Técnico no encontrado" });

    const equipo = await prisma.tb_equipo.findUnique({ where: { ID_Equipo: parseInt(ID_Equipo) } });
    if (!equipo) return res.status(404).json({ mensaje: "Equipo no encontrado" });

    const costoServicioNumerico = parseFloat(CostoServicio);
    const ivaNumerico = parseFloat(IVA);
    const valorIVA = ivaNumerico * costoServicioNumerico;
    const Total = costoServicioNumerico + valorIVA;

    const nuevaReparacion = await crearReparacionModelo({
      ID_Cliente: parseInt(ID_Cliente),
      ID_Tecnico: parseInt(ID_Tecnico),
      ID_Equipo: parseInt(ID_Equipo),
      Fecha_Ingreso: new Date(Fecha_Ingreso),
      Fecha_Entrega: new Date(Fecha_Entrega),
      CostoServicio: costoServicioNumerico,
      IVA: ivaNumerico,
      Total,
    });

    // Registrar primer estado de reparación
    await prisma.tb_estado_reparacion.create({
      data: {
        ID_Reparacion: nuevaReparacion.ID_Reparacion,
        Estado: "Ingresado",
        Descripcion: "Reparación iniciada",
      },
    });

    // Notificar al cliente
    await crearNotificacionModelo({
      ID_Cliente: parseInt(ID_Cliente),
      ID_Reparacion: nuevaReparacion.ID_Reparacion,
      Mensaje: `Se ha creado una nueva reparación (#${nuevaReparacion.ID_Reparacion}) para su equipo.`,
      Tipo: "Notificacion",
      Enviado: true,
      Aprobado: null,
    });

    res.status(201).json(nuevaReparacion);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear reparación", error: error.message });
  }
};

// Actualizar una reparación
export const actualizarReparacion = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nivel } = req.user;

  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para actualizar reparaciones" });
  }

  try {
    const { CostoServicio, IVA, Fecha_Entrega, ID_Tecnico } = req.body;
    const data = {};

    if (CostoServicio !== undefined) data.CostoServicio = parseFloat(CostoServicio);
    if (IVA !== undefined) data.IVA = parseFloat(IVA);

    if (CostoServicio !== undefined || IVA !== undefined) {

      // Recuperar los valores actuales si no vienen en el body
      const reparacionActual = await obtenerReparacionPorIdModelo(id);
      const costoServicioActual = data.CostoServicio !== undefined ? data.CostoServicio : reparacionActual?.CostoServicio;
      const ivaActual = data.IVA !== undefined ? data.IVA : reparacionActual?.IVA;
      if (costoServicioActual !== undefined && ivaActual !== undefined) {
        const valorIVA = ivaActual * costoServicioActual;
        data.Total = costoServicioActual + valorIVA;
      }
    }

    if (Fecha_Entrega) data.Fecha_Entrega = new Date(Fecha_Entrega);

    if (ID_Tecnico) {
      const tecnico = await prisma.tb_tecnico.findUnique({ where: { ID_Tecnico: parseInt(ID_Tecnico) } });
      if (!tecnico) return res.status(404).json({ mensaje: "Técnico no encontrado" });
      data.ID_Tecnico = parseInt(ID_Tecnico);
    }

    const reparacionActualizada = await actualizarReparacionModelo(id, data);

    if (reparacionActualizada) {
      await crearNotificacionModelo({
        ID_Cliente: reparacionActualizada.ID_Cliente,
        ID_Reparacion: id,
        Mensaje: `Se han actualizado los detalles de la reparación #${id}.`,
        Tipo: "Notificacion",
        Enviado: true,
        Aprobado: null,
      });
      res.json(reparacionActualizada);
    } else {
      res.status(404).json({ mensaje: "Reparación no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar reparación", error: error.message });
  }
};

// Proponer un costo extra en una reparación
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

// Eliminar una reparación (y sus dependencias)
export const eliminarReparacion = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nivel } = req.user;

  if (nivel !== "Admin") {
    return res.status(403).json({ mensaje: "No autorizado para eliminar reparaciones" });
  }

  try {
    await prisma.tb_estado_reparacion.deleteMany({ where: { ID_Reparacion: id } });
    await prisma.tb_detalle_reparacion_repuesto.deleteMany({ where: { ID_Reparacion: id } });
    await prisma.tb_notificacion.deleteMany({ where: { ID_Reparacion: id } });

    await eliminarReparacionModelo(id);
    res.json({ mensaje: "Reparación eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar reparación:", error);
    res.status(500).json({ mensaje: "Error al eliminar reparación", error: error.message });
  }
};

// Endpoint de prueba
export const probarReparaciones = async (_req, res) => {
  try {
    res.status(200).json({ message: "Funciona la funcion probarReparaciones" });
    console.log("Funciona la funcion probarReparaciones");
  } catch (error) {
    res.status(500).json({ mensaje: "Error en la función de prueba", error: error.message });
  }
};