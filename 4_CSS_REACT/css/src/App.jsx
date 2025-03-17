import "./App.css";

import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

import { useState } from "react";

function App() {
  const [n, setN] = useState(10);
  const [name, setName] = useState("Guilherme");
  const [redTitle, setRedTitle] = useState(true);

  return (
    <div>
      {/* CSS Global*/}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MyComponent></MyComponent>
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "10px solid red" }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/* Inline CSS Dinâmico */}
      <p style={n > 10 ? { color: "magenta" } : { color: "blue" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={n < 10 ? { color: "magenta" } : { color: "blue" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p
        style={name === "Guilherme" ? { color: "Green" } : { color: "yellow" }}
      >
        Guilherme
      </p>

      {/* CSS com Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título tem classe dinamica
      </h2>

      {/* CSS Módules */}
      <Title></Title>
      <h2 className="my_title">Titulo</h2>
    </div>
  );
}

export default App;
