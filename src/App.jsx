import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme";
import ToggleButton from "./components/ToggleButton";
import Login from "./screens/login";
import SantosLogo from "./imgs/Santos_Logo.png";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <div className="app">
        <img className="logo"src={SantosLogo} alt="Descrição da imagem" />
          <Login />
          <ToggleButton onClick={themeToggler} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
