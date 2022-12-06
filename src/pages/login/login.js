import "../../index.css";
import logo from "../../assets/burger.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, setTokenRole } from "../../api/api";
import InputForm from "../../components/InputForm/InputForm";
import { Button } from "../../components/Buttons/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => response.json())
      .then((obj) => {
        if (obj.code) {
          throw (obj.message)
        } else {
          return obj
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
      .catch((error) => setError(error));
  };

  return (
    <>
      <section className="container">
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
          <Button onClick={handleLogin} className="signin" text="ENTRAR"/>          
        </form>
        <footer>
          <p className="errorMsg">{error}</p>
          <p className="text-home">Não possui conta? <Link to="/register" className="link-home">Cadastre-se</Link></p>
        </footer>
      </section>
    </>
  );
};