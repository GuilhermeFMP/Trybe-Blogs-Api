const userRoute = require('express').Router();
const userMiddleware = require('../middlewares/createUserVerify');
const userTokenVerify = require('../middlewares/userTokenVerify');
const userController = require('../controllers/user');

userRoute.get(
  '/',
  userTokenVerify.authToken,
  userController.getAll,
);

userRoute.post(
  '/',
  userMiddleware.createUserVerify,
  userController.create,
);

module.exports = userRoute;