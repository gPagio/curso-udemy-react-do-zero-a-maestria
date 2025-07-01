const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Checar se o usuário já existe
  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(422)
      .json({ errors: ["E-mail já cadastrado! Utilize outro email!"] });
  }

  // Gerar a senha com hash(bcrypt)
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  // Criar o usuário
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  // Se o usuario for criado com sucesso, gerar o token
  if (!newUser) {
    return res.status(422).json({ errors: ["Erro ao criar usuário!"] });
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ errors: ["E-mail não cadastrado!"] });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(422).json({ errors: ["Senha inválida!"] });
  }

  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

const getCurrentUser = (req, res) => {
  const user = req.user;

  res.status(200).json(user);
}

module.exports = {
  register,
  login,
  getCurrentUser,
};
