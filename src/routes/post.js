const postRoute = require('express').Router();
const postMiddlewares = require('../middlewares/postVerify');
const postController = require('../controllers/post');
const userTokenVerify = require('../middlewares/userTokenVerify');

postRoute.post(
  '/',
  userTokenVerify.authToken,
  postMiddlewares.postVerify,
  postController.create,
);

module.exports = postRoute;