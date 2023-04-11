const { User } = require('../models');
const { generateToken } = require('../utils/token');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw new Error('Invalid fields');
  
  const token = generateToken(user.dataValues);

  return token;
};

module.exports = {
  login,
};