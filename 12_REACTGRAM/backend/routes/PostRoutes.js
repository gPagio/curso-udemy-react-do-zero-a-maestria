const express = require("express");
const router = express.Router();

// Controller
const {
  insertPost,
  deletePost,
  getAllPosts,
  getUserPosts,
} = require("../controllers/PostController");

// Middlewares
const { postInsertValidation } = require("../middlewares/postValidations");
const authGuard = require("../middlewares/authGuard");
const { validate } = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  postInsertValidation(),
  validate,
  insertPost
);

router.delete("/:id", authGuard, deletePost);

router.get("/", authGuard, getAllPosts);
router.get("/user/:id", authGuard, getUserPosts); // Assuming you want to get all posts, not a specific one by ID

module.exports = router;
