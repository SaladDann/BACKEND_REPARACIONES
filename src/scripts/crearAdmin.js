// Ejecuta en terminal: node "src/scripts/crearAdmin.js"

import { PrismaClient } from "../generated/prisma/client.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const crearAdmin = async () => {
  const username = "admin";
  const passwordPlano = "admin123";
  try {
    const existe = await prisma.tb_usuario.findUnique({
      where: { Usuario_Name: username }
    });
    if (existe) {
      console.log("El usuario administrador ya existe.");
      return;
    }
    const hashedPassword = await bcrypt.hash(passwordPlano, 10);
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