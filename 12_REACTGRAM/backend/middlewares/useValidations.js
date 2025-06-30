// O body retorna tudo o que vem no corpo da requisição
const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório!")
      .isLength({ min: 3 })
      .withMessage("O nome deve ter pelo menos 3 caracteres!"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório!")
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória!")
      .isLength({ min: 5 })
      .withMessage("A senha deve ter pelo menos 5 caracteres!"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória!")
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
      .withMessage("O e-mail é obrigatório!")
      .isEmail()
      .withMessage("Insira um e-mail válido!"),
    body("password").isString().withMessage("A senha é obrigatória!"),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
};
