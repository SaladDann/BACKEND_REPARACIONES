// testConnection.js par db
import { db_pool_connection } from "./src/database/db.js";

(async () => {
    try {
        const [rows] = await db_pool_connection.query("SELECT 1");
        console.log("✅ Conexión a MySQL exitosa:", rows);
    } catch (error) {
        console.error("❌ Error al conectar a MySQL:", error.message);
    }
})();

