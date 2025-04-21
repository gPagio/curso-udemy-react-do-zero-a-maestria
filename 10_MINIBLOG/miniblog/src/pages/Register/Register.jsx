import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <span>Nome: </span><input type="text" name="displayName" required placeholder="Nome do Usuário"/>
        <span>Email: </span><input type="email" name="email" required placeholder="Email do Usuário"/>
        <span>Senha: </span><input type="password" name="password" required placeholder="Insira sua Senha"/>
        <span>Confirmação de Senha: </span><input type="password" name="confirmPassword" required placeholder="Confirme sua Senha"/>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
