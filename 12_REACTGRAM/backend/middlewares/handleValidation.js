const { validationResult } = require("express-validator");
const { unlinkSync } = require("fs");
const { join } = require("path");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));
  if (req.file) {
    unlinkSync(join(req.file.destination, req.file.filename));
  }
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  validate,
};
