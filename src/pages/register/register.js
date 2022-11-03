import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";
import logoRegister from "../../assets/burger.png";

import { createUser, setToken } from "../../api/api";
import { errors } from "../../api/data/errors";
import ButtonSignin from "../../components/buttonSignin/buttonSigin";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("service");
    const navigate = useNavigate();
    const arrayErrors = errors.errors;
  
    const handleCreateUser = (e) => {
      e.preventDefault();
      createUser(name, email, password, role)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          const printError = document.querySelector('#errorMsg');
          printError.innerHTML = arrayErrors[0].register[response.status];
        })
        .then((data) => {
          if(!data) return;
          setToken(data.token);
          console.log(data.token);
          console.log(data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    };

  return (
    <section className="App">
      <div id="logo-register">
        <img src={logoRegister} alt="logo-hamburger" id="logo-img-register"/>
      </div>
      <form id="form-register">
        <input
          className="input-register"
          type="text"
          placeholder="NOME"
          onChange={(e) => setName(e.target.value)} 
        />
        <input
          className="input-register"
          type="email"
          placeholder="E-MAIL"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-register"
          type="password"
          placeholder="SENHA"
          onChange={(e) => setPassword(e.target.value)}
        />
        <select 
          id="roleOption" 
          name="roleOption" 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="service">Salão</option>
          <option value="kitchen">Cozinha</option>
        </select>
        <select
          id="restaurant"
          name="restaurant"
        >
          <option value="chapaBurger">Chapa Burger</option>
        </select>
        <ButtonSignin onClick={handleCreateUser}>
          CADASTRAR
        </ButtonSignin>
        <p id="errorMsg"></p>
        <p id="text-home">Já possui conta? <Link to="/" className="link-home"> Entrar </Link></p>
      </form>
    </section>
  );
};