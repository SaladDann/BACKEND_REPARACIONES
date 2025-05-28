//ejecute en terminal
// node node src\scripts\crearAdmin.js
//si tu ruta usa espacio en blancos usar comillas


import { PrismaClient } from "../generated/prisma/client.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const crearAdmin = async () => {
  try {
    const username = "admin";
    const passwordPlano = "admin123"; // ⚠️ Cambia por una contraseña segura
    const hashedPassword = await bcrypt.hash(passwordPlano, 10);

    // Verificar si ya existe
    const existe = await prisma.tb_usuario.findUnique({
      where: { Usuario_Name: username }
    });

    if (existe) {
      console.log("El usuario administrador ya existe.");
      process.exit(0);
    }

    const nuevoAdmin = await prisma.tb_usuario.create({
      data: {
        Usuario_Name: username,
        Usuario_Password: hashedPassword,
        Usuario_nivel: "Admin",
        Usuario_activo: true
      }
    });

    console.log("Administrador creado exitosamente:", nuevoAdmin);
  } catch (error) {
    console.error("Error al crear el administrador:", error.message);
  } finally {
    await prisma.$disconnect();
  }
};

crearAdmin();
