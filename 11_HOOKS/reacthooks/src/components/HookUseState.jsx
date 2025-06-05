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
  
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Mudar nome</button>

      <hr />
    </div>
  );
};

export default HookUseState;
