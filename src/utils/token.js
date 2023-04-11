const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const info = {
    id: payload.id,
    nome: payload.displayName,
  };
  const token = jwt.sign(info, JWT_SECRET, config);
  return token;
};

const validateToken = (token) => {
  if (!token) throw new Error('Token not found');
  try {
    const validToken = jwt.verify(token, JWT_SECRET);
    return validToken;
  } catch (err) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = {
  generateToken,
  validateToken,
};