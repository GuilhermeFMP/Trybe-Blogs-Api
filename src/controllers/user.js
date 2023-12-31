const userService = require('../services/userService');

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getById(+id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: err.message });
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

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.user);
    return res.status(204).end();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  deleteUser,
};