// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import "./Products.css";

import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Products</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter></ChangeCounter>
      <div className="groupButtonsChangeColor">
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Products;
