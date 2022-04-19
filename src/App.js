//CSS
import "./App.css";
import { GlobalStyle } from "./global/styles";

//COMPONENTS
import StartScreen from "./components/StarScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//HOOKS
import { useCallback, useEffect, useState } from "react";

//DATA
import { wordsList } from "./data";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQuanty = 3;

function App() {
  const [gameState, setGameState] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedcategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuanty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //escolhe uma categoria aleatória
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //escolhe uma palavra aleatória da categoria
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    //cria o array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //seta os status
    setPickedWord(word);
    setPickedcategory(category);
    setLetters(wordLetters);
    setGuesses(guessesQuanty);

    setGameState(stages[1].name);
  };

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //checa de a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //inclui a letra adivinhada e remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameState(stages[2].name);
    }
  }, [guesses]);

  const retry = () => {
    setScore(0);
    setGuesses(guessesQuanty);
    startGame();
    setGameState(stages[1].name);
  };

  const start = () => {
    setGameState(stages[0].name);
  };

  return (
    <div className="App">
      <GlobalStyle />
      {gameState === "start" && <StartScreen startGame={startGame} />}
      {gameState === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameState === "end" && <GameOver retry={retry} start={start} />}
    </div>
  );
}

export default App;
