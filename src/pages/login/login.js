import "../../index.css";
import logo from "../../assets/burger.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login, setTokenRole } from "../../api/api";
import { errors } from "../../api/data/errors";
import ButtonSignin from "../../components/Buttons/ButtonSignin";
import InputForm from "../../components/InputForm/InputForm";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const arrayErrors = errors.errors;

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        // Throw new Error();
        const printError = document.querySelector('#errorMsg');
        printError.innerHTML = arrayErrors[0].login[response.status];
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
        console.log(error);
        /*console.log(arrayErrors.login.erro); */
      });
  };

  return (
    <section className="App">
      <div id="logo-login">
        <img src={logo} alt="logo-hamburger" id="logo-img-login" />
      </div>
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
        <p id="errorMsg"></p>
        <p id="text-home">Não possui conta? <Link to="/register" className="link-home">Cadastre-se</Link></p>
      </form>
    </section>
  );
};