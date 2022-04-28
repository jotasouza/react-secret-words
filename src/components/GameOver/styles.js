import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3em;

  h1 {
    margin: 1em 0px 0.4em 0px;
    font-size: 3em;
  }

  h3 {
    margin-bottom: 2em;
    font-size: 1.3em;

    span {
      color: #fbca1f;
      font-size: 1.1em;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 10px;
  }
`;
