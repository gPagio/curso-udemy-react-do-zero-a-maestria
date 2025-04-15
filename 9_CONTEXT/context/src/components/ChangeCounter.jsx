import styles from "./ChangeCounter.module.css";
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  // const { counter, setCounter } = useContext(CounterContext);
  const { counter, setCounter } = useCounterContext();

  return (
    <>
      <div className={styles.group_buttons_top}>
        <div className={styles.buttons_left}>
          <button onClick={() => setCounter(counter + 1)}>
            Adiciona 1 ao contador
          </button>
          <button onClick={() => setCounter(counter * 2)}>
            Multiplica o contador por 2
          </button>
        </div>
        <div className={styles.buttons_right}>
          <button onClick={() => setCounter(counter - 1)}>
            Subtrai 1 do contador
          </button>
          <button onClick={() => setCounter(counter / 2)}>
            Divide o contador por 2
          </button>
        </div>
      </div>
      <div className={styles.group_buttons_bottom}>
        <button onClick={() => setCounter(0)}>
          Zera o contador
        </button>
      </div>
    </>
  );
};

export default ChangeCounter;
