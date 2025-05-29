import express from 'express';
import { probarLogin, login } from '../controllers/loginController.js';

const rutasLogin = express.Router();

// Ruta para probar que funciona el login
rutasLogin.get('/probarLogin', probarLogin);

rutasLogin.post('/login', login);

export default rutasLogin;
