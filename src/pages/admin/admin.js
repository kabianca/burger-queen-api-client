import React from "react";
import { useState, useEffect } from "react";
import { accessUsers } from "../../api/api";
import { HeaderAdmin } from "../../components/Header/Header";
import User from "./user";

export const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    accessUsers()
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      });
  }, []);

    return (
      <section className="App">
        <HeaderAdmin/>
        <h1>Gestão da Equipe</h1>
        <h3> Cadastro de Pessoal </h3>
        <h3> Listagem de Pessoal </h3>
        {users.map((user) => <User key={user.id}>{user}</User>)}
      </section>
    );
  };