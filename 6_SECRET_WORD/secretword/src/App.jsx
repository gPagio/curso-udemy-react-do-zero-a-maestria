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

  const guessesQuantity = 3;

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [score, setScore] = useState(0);

  const pickWordAndPickCategory = () => {
    // ESCOLHENDO CATEGORIA ALEATÓRIA
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // ESCOLHENDO PALAVRA ALEATÓRIA NA CATEGORIA
    const wordsInCategory = words[category];
    const word =
      wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

    return { word, category };
  };

  // INICIA O JOGO
  const startGame = () => {
    const { word, category } = pickWordAndPickCategory();

    const wordLetters = word.split("").map((letra) => letra.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // REINICIA O JOGO
  const retry = () => {
    setScore(0);
    setGuesses(guessesQuantity);
    setGameStage(stages[0].name);
  };

  // PROCESSA INPUT DE LETRAS
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // SE A LETRA JÁ FOI USADA, SENDO CERTA OU ERRADA, NÃO FAZ NADA
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // ENVIA LETRAS OU REMOVE TENTATIVAS
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter]);
    } else {
      setWrongLetters([...wrongLetters, normalizedLetter]);
      setGuesses(guesses == 0 ? 0 : guesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(guessesQuantity);
  };

  useEffect( () => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  return (
    <div className="App">
      {gameStage === "start" && (
        <StartScreen startGame={startGame}></StartScreen>
      )}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        ></Game>
      )}
      {gameStage === "end" && <GameOver retry={retry}></GameOver>}
    </div>
  );
}

export default App;
