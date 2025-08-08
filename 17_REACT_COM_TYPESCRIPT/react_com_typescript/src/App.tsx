import "./App.css";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import Context from "./components/Context";
import State from "./components/State";
import { createContext } from "react";

type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "Guilherme";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  const myFirstText: textOrNull = "Tem algum texto aqui";
  const mySecondText: textOrNull = null;

  const testandoFixed: fixed = "Isso";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent></FirstComponent>
        <SecondComponent name="Segundo"></SecondComponent>
        <Destructuring
          title="Primeiro Post"
          content="Algum conteudo"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.JS}
        ></Destructuring>
        <Destructuring
          title="Segundo Post"
          content="Algum conteudo"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        ></Destructuring>
        <Destructuring
          title="Terceiro Post"
          content="Algum conteudo"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.P}
        ></Destructuring>
        <State></State>
        {myFirstText && <p>Tem texto na variavel myFirstText!</p>}
        {mySecondText && <p>Tem texto na variavel mySecondText!</p>}
        {testandoFixed && <p>Tem texto na variavel testandoFixed!</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
