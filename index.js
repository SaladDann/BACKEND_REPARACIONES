import express from "express";
import cors from "cors";
import { PORT, config_cors } from "./src/config/config.js";
import routes from "./src/routes/rutasAPI.js";
import './testConnection.js';

const app = express();

app.use(cors(config_cors.application.cors.server));
app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

//manejo global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
  console.log("Prueba de API para el negocio de Juan");
});