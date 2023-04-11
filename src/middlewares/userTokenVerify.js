const tokenUtils = require('../utils/token');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const auth = tokenUtils.validateToken(authorization);
    req.user = auth;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = {
  authToken,
};