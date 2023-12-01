import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.fontColor};

  .loginInput {
    display: flex;
    border-radius: 8px;
    width: 300px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.fontColor};
  }

  .loginButton {
    margin-top: 5px;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    background-color: rgb(2, 161, 2);
    color: #fff;
    border: 0px;
  }
`;

const Login = () => {
  return (
    <LoginForm className="loginForm">
      <label className="loginLabel">Email</label>
      <input className="loginInput"></input>
      <label className="loginLabel">Senha</label>
      <input className="loginInput"></input>
      <button className="loginButton">Entrar</button>

      <label className="loginLabel">
        Não tem conta?
        <strong>
          <Link to="/signIn"> Cadastre-se</Link>
        </strong>
      </label>
    </LoginForm>
  );
};

export default Login;
