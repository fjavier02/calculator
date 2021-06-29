import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap');

  *{
    margin: 0;
    padding: 0%;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    //height: 100%;
  }

  body{
    //background-color: #16171d;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    background: #c9c9c9;
  }

  button{
    cursor: pointer;
  }

`;