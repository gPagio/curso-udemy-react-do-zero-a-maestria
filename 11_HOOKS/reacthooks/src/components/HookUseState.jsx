import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Maria");

  const changeName = () => {
    userName = "José";
    setName("José");

    console.log("Nome alterado para:", userName);
    console.log("useState alterado para:", name);
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Idade enviada:", age);
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Mudar nome</button>

      {/* 2 - useState e input */}
      <p>Digite a sua idade:</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age !== "" ? age : 0} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
