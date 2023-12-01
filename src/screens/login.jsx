import React from "react";
import { Link } from 'react-router-dom';
import './screensStyles.css'

const Login = () => {
  return (
  
  <div className="loginForm">
      <label className="loginLabel">Email</label>
      <input className="loginInput"></input>
      <label className="loginLabel">Senha</label>
      <input className="loginInput"></input>
      <button className="loginButton">Entrar</button>

      <Link to="/signIn" className="loginLabel">Não tem conta? Cadastre-se</Link>

  </div>
  
  )
  
};

export default Login;
