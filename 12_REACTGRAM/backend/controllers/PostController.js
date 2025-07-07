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
      .json({ errors: ["Você não tem permissão para editar este post!"] });
  }

  await Post.findByIdAndDelete(post._id);

  return res
    .status(200)
    .json({ id: post._id, message: "Post deletado com sucesso!" });
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort("-createdAt").exec();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ errors: ["Erro ao buscar posts!"] });
  }
};

const getUserPosts = async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(422).json({ errors: ["ID inválido!"] });
  }

  try {
    const posts = await Post.find({ userId }).sort("-createdAt").exec();
    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ errors: ["Erro ao buscar posts do usuário!"] });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(422).json({ errors: ["ID inválido!"] });
  }

  try {
    const post = await Post.findById(postId).exec();
    if (!post) {
      return res.status(404).json({ errors: ["Post não encontrado!"] });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ errors: ["Erro ao buscar o post!"] });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(422).json({ errors: ["ID inválido!"] });
  }

  const post = await Post.findById(id);
  if (!post) {
    return res.status(404).json({ errors: ["Post não encontrado!"] });
  }

  if (!post.userId.equals(req.user._id)) {
    return res
      .status(403)
      .json({ errors: ["Você não tem permissão para editar este post!"] });
  }

  if (title) {
    post.title = title;
  }

  await post.save();

  return res
    .status(200)
    .json({ post, message: "Post atualizado com sucesso!" });
};

module.exports = {
  insertPost,
  deletePost,
  getAllPosts,
  getUserPosts,
  getPostById,
  updatePost,
};
