import React, { useState, useEffect } from "react";
import { accessUsers, setTokenRole, createUser } from "../../api/api";
import { HeaderAdmin } from "../../components/Header/Header";
import User from "./user";
import InputForm from "../../components/InputForm/InputForm";
import { ButtonSignin } from "../../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleUser, setRoleUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangeRole = (e) => {
    setRoleUser(e.target.value);
  }
  
  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(name, email, password, roleUser)
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
        console.log(data);
        navigate("/");
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    accessUsers()
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      });
  }, []);

    return (
      <section className="App">
        <HeaderAdmin />
        <h1>Gestão da Equipe</h1>
        <h2> Cadastro de Pessoal </h2>
        <form id="form-register">
          <label> Nome:
            <InputForm
              type="text"
              placeholder="NOME"
              onChange={(e) => setName(e.target.value)} 
            />
          </label>
          <label> E-mail:
            <InputForm
              type="email"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label> Senha:
            <InputForm
              type="password"
              placeholder="SENHA"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label> Função:
            <select 
              id="roleOption" 
              name="roleOption" 
              onChange={handleChangeRole}
            >
              <option value="admin">Administração</option>
              <option value="service">Atendimento</option>
              <option value="kitchen">Cozinha</option>
            </select>
          </label>
          <label> Restaurante:
            <select
              id="restaurant"
              name="restaurant"
            >
              <option value="chapaBurger">Chapa Burger</option>
            </select>
          </label>
          <ButtonSignin onClick={handleCreateUser}>
            CADASTRAR
          </ButtonSignin>
          <p id="errorMsg">{error}</p>
        </form>
        <h2> Listagem de Pessoal </h2>
        {users.map((user) => <User key={user.id}>{user}</User>)}
      </section>
    );
  };