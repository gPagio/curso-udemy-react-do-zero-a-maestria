// CSS
import "./App.css";

// COMPONENTS
import StartScreen from "./components/StartScreen";

// REACT
import { useCallback, useEffect, useState } from "react";

// DATA
import { wordsList } from "./data/words";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  console.log(words);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen></StartScreen>}
      {gameStage === "game" && <Game></Game>}
      {gameStage === "end" && <GameOver></GameOver>}
    </div>
  );
}

export default App;
