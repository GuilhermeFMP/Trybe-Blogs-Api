const { BlogPost, PostCategory, Category, User } = require('../models');
const { decodeToken } = require('../utils/token');

const getAll = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

const getById = async (userId, id) => {
  const posts = await BlogPost.findOne({
    where: { userId, id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return posts;
};

const create = async ({ title, content, categoryIds }, token) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }
  const userId = decodeToken(token);
  const newPost = await BlogPost.create({
    title,
    content,
    userId: userId.id,
    published: new Date(),
    updated: new Date(),
  });
  const allCategories = await categories.map((category) => ({
    postId: newPost.id,
    categoryId: category.id,
  }));
  await PostCategory.bulkCreate(allCategories);
  return newPost;
};

module.exports = {
  create,
  getAll,
  getById,
};