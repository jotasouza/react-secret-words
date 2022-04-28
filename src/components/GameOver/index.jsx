import { Container, ContainerButton } from "./styles";
const GameOver = ({ retry, start, score }) => {
  return (
    <Container>
      <h1>Fim de Jogo</h1>
      <h3>
        A sua pontuação foi: <span>{score}</span>
      </h3>
      <ContainerButton>
        <button onClick={retry}>Jogar novamente</button>
        <button onClick={start}>Sair</button>
      </ContainerButton>
    </Container>
  );
};

export default GameOver;
