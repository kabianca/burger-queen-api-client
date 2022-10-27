import Background from "../../assets/background-login.svg";
import logo from "../../assets/burger.png";
import { Link } from "react-router-dom";

export const Login = () => {

  return (
    <div className="App">
      <img src={logo} alt="logo-hamburger" />
      <form style={{backgroundImage: `url(${Background})` }}>
        <input type="email" placeholder="USUÁRIO" />
        <input type="password" placeholder="SENHA" />
        <input type="submit" value="ENTRAR" />
        <p id="errorMsg"></p>
        <p>Não possui conta? <Link to="/register">Cadastre-se</Link></p>
      </form>
    </div>
  );
};