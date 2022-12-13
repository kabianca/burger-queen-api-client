import React, { useState, useEffect } from 'react';
import { getRole, accessOrders, updateOrders } from '../../api/api';
import { HeaderKitchen, HeaderAdmin } from '../../components/Header/Header.jsx';
import { dateTransform } from '../../imports/imports';
import './kitchen.css';

export const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  const loadOrders = () => {
    accessOrders()
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  };

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    const idOrder = e.currentTarget.dataset.id;
    updateOrders(idOrder, 'ready');
  };

  useEffect(() => {
    loadOrders();
  }, []);

  dateTransform(orders);

  return (
    <main className="container">
      {(getRole() === 'kitchen') ? <HeaderKitchen /> : <HeaderAdmin />}
      <h1 className="kitchenTitle">Pedidos em Preparo </h1>
      <section className='cards'>
        {orders.filter(((item) => item.status === 'pending')).map((item) => <article key={item.id} className="orderCard cards">
            <h2 className="clientName gridOneLine">{item.client_name}</h2>
            <p className="orderDetails">Pedido: {item.id}</p>
            <p className="orderDetails">{item.createdAt}</p>
            <div className="orderProducts gridOneLine">
              {item.Products.map((el) => <p key={el.id} className="orderInfo">{el.qtd}: {el.name}</p>)}
            </div>
            <button data-id={item.id} data-status={item.status} onClick={handleUpdateOrder} className="btnDone gridOneLine">
              Pronto para entrega
            </button>
          </article>)}
      </section>
    </main>
  );
};
