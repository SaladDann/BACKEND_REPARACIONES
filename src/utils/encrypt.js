import bcrypt from 'bcryptjs';

// Funciones para encriptar y comparar contraseñas usando bcrypt
export const hashPassword = async (password) => {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error('Error al comparar las contraseñas');
  }
};