const express = require("express");
const router = express.Router();

// Controller
const {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
} = require("../controllers/UserController");

// Middlewares
const { validate } = require("../middlewares/handleValidation");

const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations");

const authGuard = require("../middlewares/authGuard");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post("/login", loginValidation(), validate, login);
router.post("/register", userCreateValidation(), validate, register);

router.get("/profile", authGuard, getCurrentUser);
router.get("/:id", getUserById);

// Colocamos imageUpload.single("profileImage") para que o multer processe o upload de uma única imagem com o campo "profileImage"
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update);

module.exports = router;
