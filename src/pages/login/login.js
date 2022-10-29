// import Background from "../../assets/background-login.png";
import logo from "../../assets/burger.png";
import { Link } from "react-router-dom";
import "../../index.css";
import ButtonSignin from "../../components/buttonSignin/buttonSigin";

export const Login = () => {

  return (
    <section className="App">
      <div id="logo-login">
        <img src={logo} alt="logo-hamburger" id="logo-img-login" />
      </div>
      <form id="form-login">
        <input type="email" placeholder="USUÁRIO" />
        <input type="password" placeholder="SENHA" />
        <ButtonSignin>
          ENTRAR
        </ButtonSignin>
        <p id="errorMsg"></p>
        <p id="text-home">Não possui conta? <Link to="/register" className="link-home">Cadastre-se</Link></p>
      </form>
    </section>
  );
};