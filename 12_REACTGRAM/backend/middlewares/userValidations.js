// O body retorna tudo o que vem no corpo da requisição
const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .notEmpty()
      .withMessage("O nome é obrigatório!")
      .bail()
      .isLength({ min: 3 })
      .withMessage("O nome deve ter pelo menos 3 caracteres!"),
    body("email")
      .isString()
      .notEmpty()
      .withMessage("O e-mail é obrigatório!")
      .bail()
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("password")
      .isString()
      .notEmpty()
      .withMessage("A senha é obrigatória!")
      .bail()
      .isLength({ min: 5 })
      .withMessage("A senha deve ter pelo menos 5 caracteres!"),
    body("confirmPassword")
      .isString()
      .notEmpty()
      .withMessage("A confirmação de senha é obrigatória!")
      .bail()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("As senhas não conferem!");
        }

        // Se tudo estiver certo, retorna true
        // O retorno é necessário para que o Express continue o fluxo
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .notEmpty()
      .withMessage("O e-mail é obrigatório!")
      .bail()
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("password").isString().withMessage("A senha é obrigatória!"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome deve ter pelo menos 3 caracteres!"),
    body("password")
      .optional()
      .isLength({ min: 5 })
      .withMessage("A senha deve ter pelo menos 5 caracteres!"),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};
