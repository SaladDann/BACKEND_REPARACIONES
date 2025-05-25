import bcrypt from 'bcryptjs';

/**
 * Genera un hash seguro para una contraseña dada.
 * @param {string} password - Contraseña en texto plano.
 * @returns {Promise<string>} - Contraseña hasheada.
 */
export const hashPassword = async (password) => {
  const saltRounds = 10;  // Factor de coste recomendado para buen balance entre seguridad y rendimiento
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
};

/**
 * Compara una contraseña en texto plano con su versión hasheada.
 * @param {string} password - Contraseña en texto plano.
 * @param {string} hashedPassword - Contraseña hasheada almacenada.
 * @returns {Promise<boolean>} - True si coinciden, false si no.
 */
export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error('Error al comparar las contraseñas');
  }
};
