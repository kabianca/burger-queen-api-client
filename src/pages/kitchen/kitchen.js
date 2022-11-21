import React, { useState } from "react";
import { useEffect } from "react";
import { getRole, accessOrders } from "../../api/api";
// import { CardKitchen } from "../../components/cardKitchen/Card";
import {HeaderKitchen, HeaderAdmin} from "../../components/Header/Header";

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    accessOrders()
      .then((response) => response.json())
      .then((data) => {
        setOrders(data)
      });
  }, [setOrders]);

  console.log(orders)
  return (
    <section className="App">
      {(getRole() === "kitchen") ? <HeaderKitchen /> : <HeaderAdmin />}
      <h1>Cozinha em Construção</h1>
      {orders.filter((item => item.status === 'pending')).map((item) =>
        <article>
          <p>{item.id}</p>
          <p>contador</p>
          {item.Products.map((product) => <p>{product.qtd}: {product.name}</p>)}
          <button>Finalizar</button>
        </article>)}
    </section>
  );
  };