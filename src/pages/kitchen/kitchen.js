import React, { useState, useEffect } from "react";
import { getRole, accessOrders, updateOrders } from "../../api/api";
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

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    const idOrder = e.currentTarget.dataset.id
    updateOrders(idOrder, 'ready')
  }

  // let teste = orders[0].createdAt;
  console.log(orders)

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
          <button data-id={item.id} data-status={item.status} onClick={handleUpdateOrder}>Finalizar</button>
        </article>)}
    </main>
  );
  };