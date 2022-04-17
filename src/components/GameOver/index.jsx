const GameOver = ({ retry, start }) => {
  return (
    <div>
      <button onClick={retry}>Jogar novamente</button>
      <button onClick={start}>Sair</button>
    </div>
  );
};

export default GameOver;
