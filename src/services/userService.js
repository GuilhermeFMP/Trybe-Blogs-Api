const { User } = require('../models');
const { generateToken } = require('../utils/token');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw new Error('Invalid fields');
  
  const token = generateToken(user.dataValues);

  return token;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const create = async (infos) => {
  const { displayName, email, password, image } = infos;
  const userExists = await User.findOne({ where: { email } });

  if (userExists) throw new Error('User already registered');

  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const token = generateToken(infos);
  return token;
};

module.exports = {
  login,
  create,
  getAll,
};