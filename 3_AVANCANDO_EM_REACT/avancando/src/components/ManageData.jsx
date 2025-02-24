import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(someData);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button
          onClick={() => {
            someData = 15;
          }}
        >
          Mudar variável
        </button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button
          onClick={() => {
            setNumber((number) => number * 2);
          }}
        >
          Mudar estado
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNumber(someData);
          }}
        >
          Resetar estado
        </button>
      </div>
    </div>
  );
};

export default ManageData;
