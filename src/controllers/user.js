const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const newUser = await userService.create(req.body);
    return res.status(201).json({ token: newUser });
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

module.exports = {
  create,
};