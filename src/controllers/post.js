const postService = require('../services/postService');

const create = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const newPost = await postService.create(req.body, token);
    return res.status(201).json(newPost);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
};