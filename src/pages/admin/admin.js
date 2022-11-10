import React from "react";
import { HeaderAdmin } from "../../components/Header/Header";

export const Admin = () => {

    return (
      <section className="App">
        <HeaderAdmin/>
        <h1>Gestão da Equipe</h1>
        <h3> Cadastro de Pessoal </h3>
        <h3> Listagem de Pessoal </h3>
      </section>
    );
  };