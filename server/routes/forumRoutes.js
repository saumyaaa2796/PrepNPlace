const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
} = require("../controllers/forumController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post("/", protect, createPost);

router.get("/", protect, getPosts);

module.exports = router;