const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Bearer 98hsodjfsdoijfsd - da forma abaixo, apenas a parte do token é capturada
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ errors: ["Acesso negado!"] });
  }

  try {
    const verified = jwt.verify(token, jwtSecret);

    // Busca o usuario no banco e remove a senha do objeto retornado
    req.user = await User.findById(verified.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ errors: ["Token inválido!"] });
  }
};

module.exports = authGuard;
