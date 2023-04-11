const router = require('express').Router();
const loginRoute = require('./login');
const userRoute = require('./user');
const categoryRoute = require('./category');

router.use('/login', loginRoute);
router.use('/user', userRoute);
router.use('/categories', categoryRoute);

module.exports = router;