import { agregarRepuestoAReparacionModelo, obtenerDetallesPorReparacionModelo} from "../models/modeloDetalleReparacion.js";

// Agregar repuesto a reparación
export const agregarRepuestoAReparacion = async (req, res) => {
  const { nivel } = req.user;
  if (nivel !== "Admin" && nivel !== "Tecnico") {
    return res.status(403).json({ mensaje: "No autorizado para agregar repuestos" });
  }

  try {
    const { ID_Reparacion, ID_Repuesto, Cantidad } = req.body;

    const detalle = await agregarRepuestoAReparacionModelo({
      ID_Reparacion,
      ID_Repuesto,
      Cantidad,
    });

    res.status(201).json(detalle);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al agregar repuesto", error: error.message });
  }
};

// Obtener detalles por reparación (opcional)
export const obtenerDetallesPorReparacion = async (req, res) => {
  try {
    const { idReparacion } = req.params;
    const detalles = await obtenerDetallesPorReparacionModelo(parseInt(idReparacion));
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener detalles", error: error.message });
  }
};
