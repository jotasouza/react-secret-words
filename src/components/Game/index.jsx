import { useState, useRef } from "react";
import {
  GameDiv,
  WordContainerDiv,
  LetterContainerDiv,
  WrongLettersContainerDiv,
} from "./styles";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <GameDiv>
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3>
        Dica da palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)</p>
      <WordContainerDiv>
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index}>{letter}</span>
          ) : (
            <span key={index}></span>
          )
        )}
      </WordContainerDiv>
      <LetterContainerDiv>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </LetterContainerDiv>
      <WrongLettersContainerDiv>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </WrongLettersContainerDiv>
    </GameDiv>
  );
};

export default Game;
