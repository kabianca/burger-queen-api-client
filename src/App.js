import burgerLogin from "./assets/burger.jpg"
import background from "./assets/background-login.svg"
import "../src/App.css"

function App() {
  return (
    <div className="App">
      <img src={burgerLogin} alt="logo-hamburger" />
      <form style={{backgroundImage: `url(${background})` }}>
        <input type="text" placeholder="USUÁRIO" />
        <input type="password" placeholder="SENHA" />
        <input type="submit" value="ENTRAR" />
      </form>
    </div>
  );
}

export default App;
