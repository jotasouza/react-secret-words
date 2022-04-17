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

function App() {
  const [gameState, setGameState] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedcategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.random() * Object.keys(categories).length];
  };

  const startGame = () => {
    setGameState(stages[1].name);
  };

  const verifyLetter = () => {
    setGameState(stages[2].name);
  };

  const retry = () => {
    setGameState(stages[1].name);
  };

  const start = () => {
    setGameState(stages[0].name);
  };

  return (
    <div className="App">
      <GlobalStyle />
      {gameState === "start" && <StartScreen startGame={startGame} />}
      {gameState === "game" && <Game verifyLetter={verifyLetter} />}
      {gameState === "end" && <GameOver retry={retry} start={start} />}
    </div>
  );
}

export default App;
