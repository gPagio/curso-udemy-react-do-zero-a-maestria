import { use, useEffect , useState} from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  useEffect(() => {
    console.log("Execução a cada renderização do componente");
  });

  const [count, setCount] = useState(0);

  const changeCounter = () => {
    setCount(count + 1);
  }

  // 2 - useEffect com array de dependências vazio
  useEffect(() => {
    console.log("Execução apenas na montagem do componente");
  }, []);

  // 3 - useEffect com dependências
  useEffect(() => {
    if (count > 0) console.log("Execução quando o count for alterado");

  }, [count]);

  // 4 - cleanup no useEffect
/*  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer executado após 1 segundos");
      setCount(count + 1);
    }, 1000);

    // função anônima de limpeza que será executada quando o 
    // componente for desmontado ou quando o count for alterado
    return () => {
      clearTimeout(timer);
      console.log("Timer limpo");
    };
  }, [count]);*/

  return (
    <div>
      <h2>useEffect</h2>
      <p>Contador: {count}</p>
      <button onClick={changeCounter}>Incrementar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
