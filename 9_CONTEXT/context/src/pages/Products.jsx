// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Products</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter></ChangeCounter>
    </div>
  );
};

export default Products;
