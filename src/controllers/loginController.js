import { PrismaClient } from "../generated/prisma/client.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { response_success, response_bad_request, response_error,} from "../responses/responses.js";

const prisma = new PrismaClient();

// Endpoint de prueba para login
export const probarLogin = async (_req, res) => {
  try {
    res.status(200).json({ message: "Funciona la funcion probarLogin" });
    console.log("Funciona la funcion probarLogin");
  } catch (error) {
    return res
      .status(500)
      .json(response_error(`Error al iniciar sesión: ${error.message}`));
  }
};

// Login de usuario
export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json(response_bad_request("Username y password son requeridos"));
  }

  try {
    const usuario = await prisma.tb_usuario.findUnique({
      where: { Usuario_Name: username },
    });

    if (!usuario || !usuario.Usuario_activo) {
      return res
        .status(400)
        .json(response_bad_request("Usuario no encontrado o inactivo"));
    }

    const passwordValida = await bcrypt.compare(
      password,
      usuario.Usuario_Password
    );

    if (!passwordValida) {
      return res
        .status(400)
        .json(response_bad_request("Contraseña incorrecta"));
    }

    const token = jwt.sign(
      {
        id: usuario.ID_Usuario,
        nivel: usuario.Usuario_nivel,
        id_cliente: usuario.ID_Cliente ?? null,
        id_tecnico: usuario.ID_Tecnico ?? null,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4h" }
    );

    return res.status(200).json(
      response_success(
        {
          token,
          usuario: {
            id: usuario.ID_Usuario,
            nombre: usuario.Usuario_Name,
            nivel: usuario.Usuario_nivel,
          },
        },
        "Inicio de sesión exitoso"
      )
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json(response_error("Error al iniciar sesión"));
  }
};