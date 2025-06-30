const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/UserController");

// Middlewares
const { validate } = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  loginValidation,
} = require("../middlewares/useValidations");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);

module.exports = router;
