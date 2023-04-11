const categoryRoute = require('express').Router();
const categoryMiddlewares = require('../middlewares/createCategoryVerify');
const categoryController = require('../controllers/category');
const userTokenVerify = require('../middlewares/userTokenVerify');

categoryRoute.get(
  '/',
  userTokenVerify.authToken,
  categoryController.getAll,
);

categoryRoute.post(
  '/',
  userTokenVerify.authToken,
  categoryMiddlewares.createCategoryVerify,
  categoryController.create,
);

module.exports = categoryRoute;