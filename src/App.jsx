import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './theme'
import ToggleButton from './components/ToggleButton';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <div className="header">
          <ToggleButton onClick={themeToggler} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
