const ForumPost = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const post = await ForumPost.create({
      ...req.body,
      author: req.user._id,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find()
      .populate("author", "name email");

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
};