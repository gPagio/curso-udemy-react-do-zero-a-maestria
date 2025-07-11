const { body } = require("express-validator");

const postInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório")
      .isString()
      .withMessage("O título é obrigatório")
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
      .withMessage("O título deve ser uma string")
      .isLength({ min: 3 })
      .withMessage("O título deve ter pelo menos 3 caracteres"),
  ];
};

const commentValidation = () => {
  return [
    body("comment")
      .isString()
      .withMessage("O comentário deve ser uma string")
      .isLength({ min: 3 })
      .withMessage("O comentário deve ter pelo menos 3 caracteres"),
  ];
};

module.exports = {
  postInsertValidation,
  postUpdateValidation,
  commentValidation,
};
