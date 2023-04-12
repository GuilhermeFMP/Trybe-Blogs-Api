const postService = require('../services/postService');

const getAll = async (req, res) => {
  try {
    const userId = req.user.id;
    const posts = await postService.getAll(userId);
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

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
  getAll,
};