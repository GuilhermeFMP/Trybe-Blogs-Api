const router = require('express').Router();
const loginRoute = require('./login');
const userRoute = require('./user');

router.use('/login', loginRoute);
router.use('/user', userRoute);

module.exports = router;