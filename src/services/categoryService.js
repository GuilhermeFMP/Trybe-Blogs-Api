const { Category } = require('../models');

const create = async (cat) => {
  const { name } = cat;

  const newCategory = await Category.create({
    name,
  });

  return newCategory;
};

module.exports = {
  create,
};