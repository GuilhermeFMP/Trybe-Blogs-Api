const loginRoute = require('express').Router();
const loginController = require('../controllers/login');
const loginMiddlewares = require('../middlewares/loginVerify');

loginRoute.post(
  '/',
  loginMiddlewares.loginVerify,
  loginController.login,
);

module.exports = loginRoute;