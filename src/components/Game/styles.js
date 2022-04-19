import styled from "styled-components";

export const GameDiv = styled.div`
  h1 {
    font-size: 2.5em;
  }

  p span {
    font-weight: bold;
  }

  h3 span {
    color: #fbca1f;
  }
`;

export const WordContainerDiv = styled.div`
  margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #fbca1f;
  display: flex;

  span {
    font-size: 4em;
    line-height: 1.5;
    border: 3px solid black;
    width: 100px;
    height: 100px;
    text-transform: uppercase;
    background-color: white;
    color: black;
    font-weight: bold;
  }
`;

export const LetterContainerDiv = styled.div`
  p {
    margin-bottom: 1.2em;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    height: 50px;
    width: 50px;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-right: 0.3em;
    border: 3px solid black;
  }
`;

export const WrongLettersContainerDiv = styled.div`
  margin-top: 1em;
`;
