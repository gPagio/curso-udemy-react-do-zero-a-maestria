const { body } = require("express-validator");

const postInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório")
      .bail()
      .isString()
      .notEmpty()
      .withMessage("O título é obrigatório")
      .bail()
      .isLength({ min: 3 })
      .withMessage("O título deve ter pelo menos 3 caracteres"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória");
      }
      return true;
    }),
  ];
};

const postUpdateValidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .notEmpty()
      .withMessage("O título é obrigatório")
      .bail()
      .isLength({ min: 3 })
      .withMessage("O título deve ter pelo menos 3 caracteres"),
  ];
};

const commentValidation = () => {
  return [
    body("comment")
      .isString()
      .notEmpty()
      .withMessage("O comentário é obrigatório")
      .bail()
      .isLength({ min: 3 })
      .withMessage("O comentário deve ter pelo menos 3 caracteres"),
  ];
};

module.exports = {
  postInsertValidation,
  postUpdateValidation,
  commentValidation,
};
