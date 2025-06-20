require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

// Configurar para aceitar JSON e Imagens
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar CORS
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL}));

// Configurar o diretório de imagens
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configurar o banco de dados
require("./config/db");

// Rotas
const router = require("./routes/Router");
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});