const express = require("express");
const router = express.Router();

const { register } = require("../controllers/UserController");

// Middlewares
const { validate } = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/useValidations");

router.post("/register", userCreateValidation(), validate, register);

module.exports = router;
