const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginAuth = await userService.login(email, password);
    return res.status(200).json({ token: loginAuth });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  login,
};