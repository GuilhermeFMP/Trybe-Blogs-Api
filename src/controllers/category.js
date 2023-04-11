const categoryService = require('../services/categoryService');

const getAll = async (req, res) => {
  try {
    const users = await categoryService.getAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const newCategory = await categoryService.create(req.body);
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
};