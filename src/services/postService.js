const { BlogPost, PostCategory, Category } = require('../models');
const { decodeToken } = require('../utils/token');

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
};