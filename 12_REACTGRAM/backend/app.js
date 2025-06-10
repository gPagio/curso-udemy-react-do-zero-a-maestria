import express, { json, urlencoded } from "express";
import path from "path";
import cors from "cors";

const port = 5000;
const app = express();

// Configurar para aceitar JSON e Imagens
app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});