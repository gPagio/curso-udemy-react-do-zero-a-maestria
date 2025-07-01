const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/UserController");

// Middlewares
const { validate } = require("../middlewares/handleValidation");

const {
  userCreateValidation,
  loginValidation,
} = require("../middlewares/useValidations");

const authGuard = require("../middlewares/authGuard");

router.post("/login", loginValidation(), validate, login);
router.post("/register", userCreateValidation(), validate, authGuard, register);
router.get("/profile", authGuard, getCurrentUser);

module.exports = router;
