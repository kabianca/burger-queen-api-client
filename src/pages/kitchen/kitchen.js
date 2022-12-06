import React, { useState, useEffect } from "react";
import { getRole, accessOrders } from "../../api/api";
import {HeaderKitchen, HeaderAdmin} from "../../components/Header/Header";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => { 
    accessOrders()
    .then((response) => response.json())
    .then((data) => {
      setOrders(data)
    });
  }

  useEffect(() => {
    loadOrders();
  },[]);

  return (
    <main className="container">
      {(getRole() === "kitchen") ? <HeaderKitchen /> : <HeaderAdmin />}
      <h1>Cozinha em Construção</h1>
      {orders.filter((item => item.status === 'pending')).map((item) =>
        <article key={item.id}>
          <p>{item.id}</p>
          <p>contador</p>
          <p>{item.qtd}: {item.name}</p>
          <button>Finalizar</button>
        </article>)}
    </main>
  );
  };