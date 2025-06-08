import { useState, useCallback } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [count, setCount] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    console.log("Buscando itens do banco de dados...");
    return ["Item 1", "Item 2", "Item 3"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDatabase}></List>
      <button onClick={() => setCount(count + 1)}>Alterar!</button>
      <p>Contador: {count}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
