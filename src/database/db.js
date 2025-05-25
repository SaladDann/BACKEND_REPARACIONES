import { createPool } from "mysql2/promise";
import {PORT, HOST_DB, USER_DB, PASSWORD, DATABASE, PORT_DB  } from "../config/config.js";

export const db_pool_connection = createPool(
    {
        host: HOST_DB,
        user: USER_DB,
        password: PASSWORD,
        database: DATABASE,
        port: PORT_DB,

        waitForConnections: true,    // Esperar conexiones si el pool está saturado
        connectionLimit: 10,        // Limitar conexiones simultáneas (ajustable)
        queueLimit: 0              // Sin límite en cola de peticiones
    }
);
