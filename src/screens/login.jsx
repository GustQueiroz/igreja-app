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

      <label className="loginLabel">Não tem conta?<strong> Cadastre-se</strong></label>
  </div>
  
  )
  
};

export default Login;
