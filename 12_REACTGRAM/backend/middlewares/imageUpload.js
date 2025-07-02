const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
  // As funções de armazenamento do multer permitem definir o destino e o nome do arquivo.
  // Elas recebem o objeto de requisição (req), o arquivo (file) e uma função de callback (cb).
  // O req é o objeto de requisição do Express, que contém informações sobre a requ
  // O file é o objeto que contém informações sobre o arquivo enviado, como o nome original, o tipo MIME e o caminho temporário onde ele foi armazenado.
  // A função de callback deve ser chamada com dois parâmetros: erro (null se não houver erro) e o caminho do arquivo.

  // Define o destino do arquivo
  destination: (req, file, cb) => {
    let folder = "";

    // Determina a pasta de destino com base na rota
    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("posts")) {
      folder = "posts";
    }

    // Define o caminho de destino
    cb(null, `uploads/${folder}/`);
  },

  // Define o nome do arquivo
  filename: (req, file, cb) => {
    // Gera um nome único para o arquivo usando a data atual e a extensão do arquivo original
    // Isso evita conflitos de nomes e garante que cada arquivo tenha um nome único.
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // Se o arquivo não for uma imagem PNG ou JPG, retorna um erro
      return cb(new Error("Por favor, envie uma imagem PNG ou JPG!"));
    }

    // Se o arquivo for válido, chama a função de callback sem erro e permite o upload
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
