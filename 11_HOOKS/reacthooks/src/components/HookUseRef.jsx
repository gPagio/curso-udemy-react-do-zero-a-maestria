import { useEffect, useState, useRef, use } from "react";

const HookUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2 - useRef e DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);

    setText("");
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      {/* 1 - useRef */}
      <p>O componente renderizou {numberRef.current} vezes.</p>
      <p>Counter A: {counterA} </p>
      <button
        onClick={() => {
          setCounterA(counterA + 1);
        }}
      >
        Incrementar Counter A
      </button>
      <p>Counter B: {counterB} </p>
      <button
        onClick={() => {
          setCounterB(counterB + 1);
        }}
      >
        Incrementar Counter B
      </button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
