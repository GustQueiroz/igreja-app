import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.fontColor};

  .SignInInput {
    display: flex;
    border-radius: 8px;
    width: 300px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.fontColor};
    color: ${({ theme }) => theme.fontColor};
  }

  .SignInButton {
    margin-top: 5px;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    background-color: rgb(2, 161, 2);
    color: #fff;
    border: 0px;
  }
`;

const SignIn = () => {
  return (
    <SignInForm className="SignInForm">
      <label className="SignInLabel">Email</label>
      <input className="SignInInput"></input>
      <label className="SignInLabel">Email</label>
      <input className="SignInInput"></input>
      <label className="SignInLabel">Email</label>
      <input className="SignInInput"></input>
      <label className="SignInLabel">Senha</label>
      <input className="SignInInput"></input>
      <button className="SignInButton">Entrar</button>
    </SignInForm>
  );
  }

export default SignIn;