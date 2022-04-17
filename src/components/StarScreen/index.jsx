import { Title, Paragraph } from "./styles";

const StartScreen = ({ startGame }) => {
  return (
    <div>
      <Title>Secret Word</Title>
      <Paragraph>Clique no botão abaixo para iniciar</Paragraph>
      <button onClick={startGame}>Iniciar o jogo</button>
    </div>
  );
};

export default StartScreen;
