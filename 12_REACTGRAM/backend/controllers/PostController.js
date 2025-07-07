const Post = require("../models/Post");
const User = require("../models/User");
const mongoose = require("mongoose");

const insertPost = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);
  const newPost = new Post({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  if (!newPost) {
    res.status(422).json({
      errors: ["Houve um erro ao criar o post!"],
    });
  }

  newPost.save();
  res.status(201).json(newPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(422).json({ errors: ["ID inválido!"] });
  }

  const post = await Post.findById(new mongoose.Types.ObjectId(id));
  if (!post) return res.status(404).json({ errors: ["Post não encontrado!"] });

  if (!post.userId.equals(req.user._id)) {
    return res
      .status(422)
      .json({ errors: ["Ocorreu um erro ao deletar o post!"] });
  }

  await Post.findByIdAndDelete(post._id);

  return res
    .status(200)
    .json({ id: post._id, message: "Post deletado com sucesso!" });
};

module.exports = {
  insertPost,
  deletePost,
};
