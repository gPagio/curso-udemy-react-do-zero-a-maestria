const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getCurrentUser,
  update,
} = require("../controllers/UserController");

// Middlewares
const { validate } = require("../middlewares/handleValidation");

const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations");

const authGuard = require("../middlewares/authGuard");

router.post("/login", loginValidation(), validate, login);
router.post("/register", userCreateValidation(), validate, authGuard, register);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validate, update);

module.exports = router;
