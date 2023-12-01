import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignInForm = styled.div`
  color: ${({ theme }) => theme.fontColor};

  .SignInInput {
    margin-bottom: 20px;
    margin-top: 5px;
    display: flex;
    border-radius: 8px;
    width: 300px;
    height: 35px;
    border: 1px solid ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.fontColor};
  }
  .SignInButton {
    margin-top: 30px;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    background-color: rgb(2, 161, 2);
    color: #fff;
    border: 0px;
    cursor: pointer;
  }
  .centered {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .invisible {
    display: none;
  }
`;

const SignIn = () => {
  return (
    <SignInForm className="SignInForm">
      <form className="row g-3">
      <div className="col-lg-8 col-sm-12">
      <label className="SignInLabel">Nome</label>
        <input className="SignInInput"></input>
      </div>
        <label className="SignInLabel">Email</label>
        <input className="SignInInput"></input>
        <label className="SignInLabel">Telefone</label>
        <input className="SignInInput"></input>
        <label className="SignInLabel">Idade</label>
        <input className="SignInInput"></input>
        <label className="SignInLabel">Senha</label>
        <input className="SignInInput"></input>
        <button className="SignInButton">Entrar</button>
      </form>
    </SignInForm>
  );
  }

export default SignIn;