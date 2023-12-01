import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme";
import ToggleButton from "./components/ToggleButton";
import Login from "./screens/login";
import SignIn from "./screens/signIn";
import SantosLogo from "./imgs/Santos_Logo.png";
import "./App.css";

function Home({ themeToggler }) {
  return (
    <div className="container">
      <img className="logo" src={SantosLogo} alt="Descrição da imagem" />
      <Login />
      <ToggleButton onClick={themeToggler} />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home themeToggler={themeToggler} />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
