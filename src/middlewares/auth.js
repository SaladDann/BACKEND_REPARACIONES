import jwt from 'jsonwebtoken';
import { response_error, response_bad_request } from '../responses/responses.js';

// Middleware para verificar el JWT
export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json(response_bad_request('Token no proporcionado o formato inválido'));
  }

  const token = authHeader.split(' ')[1];

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET no definido");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json(response_error('Token expirado'));
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json(response_error('Token inválido'));
    }
    return res.status(500).json(response_error('Error al procesar token'));
  }
};

// Middleware para verificar roles permitidos
export const verificarRol = (nivelesPermitidos = []) => {
  return (req, res, next) => {
    
    console.log('Usuario decodificado:', req.user); // 👈 solo pruebas

    if (!req.user || !req.user.nivel) {
      return res.status(401).json(response_bad_request('Usuario no autenticado'));
    }

    if (!nivelesPermitidos.includes(req.user.nivel)) {
      return res.status(403).json(response_error('No tiene permisos suficientes'));
    }

    next();
  };
};

