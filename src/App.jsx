import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme";
import SharedLayout from "./SharedLayout";
import Login from "./screens/login";
import SignIn from "./screens/signIn";
import "./App.css";

function Home({ themeToggler }) {
  return (
    <SharedLayout themeToggler={themeToggler}>
      <Login />
    </SharedLayout>
  );
}

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home themeToggler={themeToggler} />} />
          <Route path="/signIn" element={<SharedLayout themeToggler={themeToggler}><SignIn /></SharedLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;