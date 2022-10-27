import Background from "../../assets/background-login.svg";
import logo from "../../assets/burger.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/api";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("service");
    const navigate = useNavigate();
  
    const handleCreateUser = (e) => {
      e.preventDefault();
      createUser(name, email, password, role)
        .then((check) => {
          if (check.status === 200) {
            return check.json();
          }
        })
        .then((data) => {
          if(!data) return;
          console.log(data.token);
          console.log(data);
          navigate("/menu");
        })
        .catch(() => console.log('deu errado'));
    };

  return (
    <div className="App">
      <img src={logo} alt="logo-hamburger" />
      <form style={{backgroundImage: `url(${Background})` }}>
        <input type="text" placeholder="NOME" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="E-MAIL" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="SENHA" onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="FUNÇÃO (servico ou cozinha)" onChange={(e) => setRole(e.target.value)} />
        <input type="text" placeholder="RESTAURANTE" />
        <input type="submit" value="CADASTRAR" onClick={handleCreateUser} />
        <p id="errorMsg"></p>
        <p>Já possui conta? <Link to="/">Entrar</Link></p>
      </form>
    </div>
  );
};