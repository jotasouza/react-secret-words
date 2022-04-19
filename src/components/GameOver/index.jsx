const GameOver = ({ retry, start }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Jogar novamente</button>
      <button onClick={start}>Sair</button>
    </div>
  );
};

export default GameOver;
