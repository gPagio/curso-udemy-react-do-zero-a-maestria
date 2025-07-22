import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {};

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça login para ver o que há de novo.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
          required
        />
        <button className="btn" type="submit">
          Entrar
        </button>
        <p>
          Não tem uma conta? <Link to="/register">Crie uma!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
