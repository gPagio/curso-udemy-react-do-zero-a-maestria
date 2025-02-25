import { use, useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Guilherme");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Mudar nome</button>
    </div>
  );
};

export default CondicionalRender;
