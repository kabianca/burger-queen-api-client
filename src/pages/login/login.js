import "../../index.css";
import logo from "../../assets/burger.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../api/api";
// import { LoginValidate } from "../../api/validations";
import ButtonSignin from "../../components/buttonSignin/buttonSigin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((check) => {
        if (check.status === 200) {
          return check.json()
        }
      })
      .then((data) => {
        if(!data) return; // se não encontrar os dados do usuário, não me retorne nada
        navigate(data.role === "service" ? "/menu" : "/kitchen"); // ao encontrar os dados do usuário de acordo com a função dele direcione para a próxima página. 
      })
      .catch(() => console.log('deu errado'));
  };

  return (
    <section className="App">
      <div id="logo-login">
        <img src={logo} alt="logo-hamburger" id="logo-img-login" />
      </div>
      <form id="form-login">
        <input className="input-login" type="email" placeholder="E-MAIL" onChange={(e) => setEmail(e.target.value)} />
        <input className="input-login" type="password" placeholder="SENHA" onChange={(e) => setPassword(e.target.value)} />
        <ButtonSignin onClick={handleLogin}>
          ENTRAR
        </ButtonSignin>
        <p id="errorMsg"></p>
        <p id="text-home">Não possui conta? <Link to="/register" className="link-home">Cadastre-se</Link></p>
      </form>
    </section>
  );
};