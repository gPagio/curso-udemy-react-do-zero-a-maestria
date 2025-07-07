const express = require("express");
const router = express.Router();

// Controller
const { insertPost, deletePost } = require("../controllers/PostController");

// Middlewares
const { postInsertValidation } = require("../middlewares/postValidations");
const authGuard = require("../middlewares/authGuard");
const { validate } = require("../middlewares/handleValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post("/", authGuard, imageUpload.single("image"), postInsertValidation(), validate, insertPost);

router.delete("/:id", authGuard, deletePost);

module.exports = router;
