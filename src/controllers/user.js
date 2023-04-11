const userService = require('../services/userService');

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const newUser = await userService.create(req.body);
    return res.status(201).json({ token: newUser });
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
};