/* import logo from './logo.svg';*/
import './App.css';
import React from 'react';
import Main from './pages/Main'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global'
import {theme} from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
