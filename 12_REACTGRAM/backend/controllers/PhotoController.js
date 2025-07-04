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

  res.status(201).json(newPost);
};

module.exports = {
  insertPost,
};
