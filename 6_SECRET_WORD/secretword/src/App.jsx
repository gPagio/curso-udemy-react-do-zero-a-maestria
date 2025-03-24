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
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndPickCategory = () => {
    // ESCOLHENDO CATEGORIA ALEATÓRIA
    const categories = Object.keys(words);
    const categorie = categories[Math.floor(Math.random() * categories.length)];

    // ESCOLHENDO PALAVRA ALEATÓRIA NA CATEGORIA
    const wordsInCategory = words[categorie];
    const word = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

    return {word, categorie};
  };

  // INICIA O JOGO
  const startGame = () => {
    const { word, categorie } = pickWordAndPickCategory();

    const wordLetters = word.split("").map((letra) => removerAcentos(letra.toLowerCase()));
    setPickedWord(word);
    setPickedCategory(categorie);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // REINICIA O JOGO
  const retry = () => {
    setGameStage(stages[0].name);
  };

  // PROCESSA INPUT DE LETRAS
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}></StartScreen>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}></Game>}
      {gameStage === "end" && <GameOver retry={retry}></GameOver>}
    </div>
  );
}

export default App;
