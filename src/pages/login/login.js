import React from "react";
import "../../index.css";
import logo from "../../assets/burger.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, setTokenRole } from "../../api/api";
import {ButtonSignin} from "../../components/Buttons/Buttons";
import InputForm from "../../components/InputForm/InputForm";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => response.json())
      .then((response) => {
        if (response.code) {
          throw (response.message)
        } else {
          return response
        }
      })
        .then((data) => {
          if(!data) return;
          setTokenRole(data.token, data.role);
          if (data.role === "service") {
            navigate("/menu");
          } if (data.role === "kitchen") {
            navigate("/kitchen");
          } if (data.role === "admin") {
            navigate("/admin");
          }
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      <figure id="logo-login">
        <img src={logo} alt="logo-hamburger" id="logo-img-login" />
      </figure>
      <form id="form-login">
        <InputForm 
          type="email" 
          placeholder="E-MAIL" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <InputForm 
          type="password" 
          placeholder="SENHA" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonSignin onClick={handleLogin}>
          ENTRAR
        </ButtonSignin>
        <p id="errorMsg">{error}</p>
        <p id="text-home">Não possui conta? <Link to="/register" className="link-home">Cadastre-se</Link></p>
      </form>
    </>
  );
};