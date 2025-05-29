import { createPool } from "mysql2/promise";
import { PORT, HOST_DB, USER_DB, PASSWORD, DATABASE, PORT_DB } from "../config/config.js";

// Configuración y exportación del pool de conexiones MySQL
export const db_pool_connection = createPool({
  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD,
  database: DATABASE,
  port: PORT_DB,

  // Solo si se tiene muchas conecciones
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0 // para no tener limite en espera si es (0)
});