import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  // implemnentação abaixo poderia gerar problemas de performance
  // pois a função é recriada toda vez que o componente é renderizado.
  // Em cenarios com muitosnúmeros, pense que ela seria recriada a cada renderização.
  // const premiumNumbers = ["0", "100", "200", "300", "400", "500"];

  // Para evitar isso, podemos usar useMemo para memorizar o resultado.
  const premiumNumbers = useMemo(() => {
    console.log("useMemo: Calculando números premium");
    return ["0", "100", "200", "300", "400", "500"];
  }, []);

  useEffect(() => {
    console.log("useEffect: Executando efeito colateral");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      {number !== "" && (
        <>
          {premiumNumbers.includes(number) ? (
            <p>O número {number} é um número premium!</p>
          ) : (
            <p>O número {number} não é um número premium.</p>
          )}
        </>
      )}
      <hr />
    </div>
  );
};

export default HookUseMemo;
