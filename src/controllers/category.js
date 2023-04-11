const categoryService = require('../services/categoryService');

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
};