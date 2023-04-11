const userRoute = require('express').Router();
const userMiddleware = require('../middlewares/createUserVerify');
const userController = require('../controllers/user');

userRoute.post(
  '/',
  userMiddleware.createUserVerify,
  userController.create,
  );

module.exports = userRoute;