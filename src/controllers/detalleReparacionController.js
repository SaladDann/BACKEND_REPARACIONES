import { PrismaClient } from "../generated/prisma/client.js";
import { agregarRepuestoAReparacionModelo, obtenerDetallesPorReparacionModelo } from "../models/modeloDetalleReparacion.js";
import { crearNotificacionModelo } from "../models/modeloNotificaciones.js";

const prisma = new PrismaClient();

// Agregar un repuesto a una reparación.
export const agregarRepuestoAReparacion = async (req, res) => {
  const { nivel } = req.user;
  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para agregar repuestos" });
  }

  try {
    const { ID_Reparacion, ID_Repuesto, Cantidad } = req.body;
    if (!ID_Reparacion || !ID_Repuesto || !Cantidad) {
      return res.status(400).json({ mensaje: "Todos los campos son requeridos" });
    }

    // Verifica que la reparación exista
    const reparacion = await prisma.tb_reparacion.findUnique({
      where: { ID_Reparacion: parseInt(ID_Reparacion) }
    });
    if (!reparacion) {
      return res.status(404).json({ mensaje: "Reparación no encontrada" });
    }

    // Verifica que el repuesto exista
    const repuesto = await prisma.tb_repuesto.findUnique({
      where: { ID_Repuesto: parseInt(ID_Repuesto) }
    });
    if (!repuesto) {
      return res.status(404).json({ mensaje: "Repuesto no encontrado" });
    }

    const Subtotal = parseFloat(repuesto.Precio) * parseInt(Cantidad);

    // Crea la notificación para aprobación del cliente
    const notificacion = await crearNotificacionModelo({
      ID_Cliente: reparacion.ID_Cliente,
      ID_Reparacion: parseInt(ID_Reparacion),
      Mensaje: `Se solicita su aprobación para añadir el repuesto ${repuesto.Nombre} (Cantidad: ${Cantidad}, Subtotal: ${Subtotal}) a la reparación #${ID_Reparacion}.`,
      Tipo: "Notificacion",
      Tipo_Cambio: "Repuesto",
      Datos_Cambio: { ID_Repuesto, Cantidad, Subtotal },
      Enviado: false,
      Aprobado: null,
    });

    return res.status(201).json({ mensaje: "Notificación creada, pendiente de aprobación", notificacion });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al solicitar repuesto", error: error.message });
  }
};

// Obtiene los detalles de repuestos por ID de reparación.
export const obtenerDetallesPorReparacion = async (req, res) => {
  try {
    const { idReparacion } = req.params;
    const detalles = await obtenerDetallesPorReparacionModelo(parseInt(idReparacion));
    return res.json(detalles);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al obtener detalles", error: error.message });
  }
};