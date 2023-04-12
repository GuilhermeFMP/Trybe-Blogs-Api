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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const posts = await postService.getById(userId, id);
    if (!posts) return res.status(404).json({ message: 'Post does not exist' });
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

const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { title, content } = req.body;
    const editedPost = await postService.editPost(userId, id, title, content);
    if (!editedPost) return res.status(401).json({ message: 'Unauthorized user' });
    return res.status(200).json(editedPost);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const allPosts = await postService.getByIdAll(id);
    if (!allPosts) return res.status(404).json({ message: 'Post does not exist' });

    const deleted = await postService.deletePost(userId, id);
    if (!deleted) return res.status(401).json({ message: 'Unauthorized user' });

    return res.status(204).end();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  editPost,
  deletePost,
};