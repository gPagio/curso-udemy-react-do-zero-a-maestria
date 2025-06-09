import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousNumber = usePrevious(number);

  return (
    <div>
      <h2>customHook</h2>
      <p>Número: {number}</p>
      <p>Número anterior: {previousNumber}</p>
      <button onClick={() => setNumber(Math.random())}>Mudar Numero</button>
      <hr />
    </div>
  );
};

export default HookCustom;
