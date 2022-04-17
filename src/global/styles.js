import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  height: 100%;
}

body {
  font-family: "Helvetica", sans-serif;
  color: white;
  background: #000428; 
  background: -webkit-linear-gradient(
    to top,
    #000428,
    #004e92
  ); 
  background: linear-gradient(
    to top,
    #000428,
    #004e92
  ); 
}

button {
  background: #fbca1f;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: bold;
  font-size: 1.2em;
  border: 3px solid #000428;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  text-transform: uppercase;
  height: 50px;
  padding: 0 25px;
  cursor: pointer;
}

button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }

`;
