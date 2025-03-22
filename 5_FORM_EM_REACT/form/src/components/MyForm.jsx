import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ user }) => {
  {/*6 - CONTROLLED INPUTS*/}
  {/*3 - GERENCIAMENTO DE DADOS*/}
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !bio || !role) {
      alert("Preencha todos os campos!");
      return;
    } else {
      console.log("Enviando dados...");
      console.log(name, email, bio, role);

      {/*7 - LIMPEZA DE FORM*/}
      setName("");
      setEmail("");
      setBio("");
      setRole("");
    } 
  };

  /*  console.log(name);
  console.log(email);*/

  return (
    <div>
      {/* 5 - ENVIO DE FORM*/}
      <form onSubmit={handleSubmit}>
        {/* 1 - CRIACAO DE FORM*/}
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        {/* 2 - LABEL ENVOLVENDO INPUT*/}
        <label>
          <span>Email: </span>
          {/*4 - SIMPLIFICACAO DE MANIPULACAO DE STATE*/}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          {/*8 - TEXTAREA*/}
          <span>Bio: </span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(event) => setBio(event.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          {/*9 - SELECT*/}
          <span>Função no Sistema: </span>
          <select name="role" onChange={(event) => setRole(event.target.value)} value={role}>
            <option value="">Selecione</option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
