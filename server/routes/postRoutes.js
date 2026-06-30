const express = require("express");

const router = express.Router();

const {
  createPost,
  getPosts,
  addComment,
  getComments,
} = require("../controllers/postController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post("/", protect, createPost);

router.get("/", protect, getPosts);

router.post(
  "/:id/comment",
  protect,
  addComment
);

router.get(
  "/:id/comments",
  protect,
  getComments
);

module.exports = router;