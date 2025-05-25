import express from 'express';
import { probarLogin, login } from '../controllers/loginController.js';

const rutasLogin = express.Router();

// Ruta pública para probar que funciona el login
rutasLogin.get('/probarLogin', probarLogin);

// Ruta pública para iniciar sesión (no requiere token)
rutasLogin.post('/login', login);

export default rutasLogin;
