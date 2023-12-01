import React from "react";
import SantosLogo from "./imgs/Santos_Logo.png"
import ToggleButton from "./components/ToggleButton";

const SharedLayout = ({ children, themeToggler }) => {
  return (
    <div className="container">
      <img className="logo" src={SantosLogo} alt="Descrição da imagem" />
      {children}
      <ToggleButton onClick={themeToggler} />
    </div>
  );
};

export default SharedLayout;
