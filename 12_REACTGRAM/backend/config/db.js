const mongoose = require("mongoose");

// Conexão com o MongoDB
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@default.gbbqdgc.mongodb.net/?retryWrites=true&w=majority&appName=Default`
    );

    console.log("MongoDB conectado com sucesso!");
    return dbConnection;
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
  }
};

conn();
module.exports = conn;