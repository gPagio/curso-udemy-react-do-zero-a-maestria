import { useReducer } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random();
  });

  return (
    <div>
      <h2>useReducer</h2>
      <p>Gerando um número aleatório: {number}</p>
      <button onClick={() => dispatch()}>Gerar número</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;
