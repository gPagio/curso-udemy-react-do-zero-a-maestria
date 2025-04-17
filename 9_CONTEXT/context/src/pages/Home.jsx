// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import "./Home.css";

import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // Pega o valor do contexto
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>

      {/*Alterando valor do contador*/}
      <ChangeCounter></ChangeCounter>
      <div className="groupButtonsChangeColor">
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
