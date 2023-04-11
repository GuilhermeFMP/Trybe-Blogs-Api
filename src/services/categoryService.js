const { Category } = require('../models');

const getAll = async () => {
  const users = await Category.findAll();
  return users;
};

const create = async (cat) => {
  const { name } = cat;

  const newCategory = await Category.create({
    name,
  });

  return newCategory;
};

module.exports = {
  create,
  getAll,
};