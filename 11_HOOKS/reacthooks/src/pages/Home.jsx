import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState></HookUseState>
      <HookUseReducer></HookUseReducer>
      <HookUseEffect></HookUseEffect>
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <HookUseRef></HookUseRef>
      <HookUseCallback></HookUseCallback>
      <HookUseMemo></HookUseMemo>
    </div>
  );
};

export default Home;
