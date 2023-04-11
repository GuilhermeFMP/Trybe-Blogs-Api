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

module.exports = {
  generateToken,
};