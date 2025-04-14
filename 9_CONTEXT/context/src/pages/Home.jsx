import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  // Pega o valor do contexto
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>

      {/*Alterando valor do contador*/}
      <ChangeCounter></ChangeCounter>
    </div>
  );
};

export default Home;
