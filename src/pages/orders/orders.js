import React, { useState } from 'react';
import { accessOrders, updateOrders } from '../../api/api';
import { timeDuration, cookingTime } from '../../imports/imports';
import { Header } from '../../components/Header/Header.jsx';
import { Button } from '../../components/Buttons/Button.jsx';
import { Grid } from '../../components/Grid/Grid.jsx';
import './orders.css';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [time, setTime] = useState(0);

  const loadOrders = () => {
    accessOrders()
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
    setTime(Date.now());
  };

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    const idOrder = e.currentTarget.dataset.id;
    updateOrders(idOrder, 'done');
  };

  const headerKitchen = ['ID Pedido', 'Cliente', 'Mesa', 'ID Atendente', 'Tempo'];
  const headerDelivery = ['ID Pedido', 'Cliente', 'Mesa', 'Qnt de Itens', 'Entregue?'];
  const headerFinished = ['ID Pedido', 'Cliente', 'Qnt de Itens', 'ID Atendente', 'Tempo'];

  // Comentado para não sobrecarregar a API
  // useEffect(() => {
  //   loadOrders();
  // }, []);

  return (
      <main className="container">
        <Header />
        <Button onClick={loadOrders} className="reload">
          Consultar novos pedidos
        </Button>

       <section>
       <h2 className="title">Na Cozinha</h2>
          <nav>
            <ul className='oneLine headerColumns'>
              {headerKitchen.map((title, index) => <Grid key={index} item={title} />)}
            </ul>
              {orders.filter((item) => item.status === 'pending')
                .map((i) => <ul key={i.id} className='oneLine'>
                              <Grid item={i.id} />
                              <Grid item={i.client_name} />
                              <Grid item={i.table} />
                              <Grid item={i.user_id} />
                              <Grid item={cookingTime(i.createdAt, time)} />
                            </ul>)}
          </nav>
       </section>

        <section>
         <h2 className="title">Pronto para Entrega</h2>
         <nav>
          <ul className='oneLine headerColumns'>
            {headerDelivery.map((title, index) => <Grid key={index} item={title} />)}
          </ul>
            {orders.filter((item) => item.status === 'ready')
              .map((i) => <ul key={i.id} className='oneLine'>
                                <Grid item={i.id} />
                                <Grid item={i.client_name} />
                                <Grid item={i.table} />
                                <Grid item={i.Products.length} />
                                <Button
                                  data-id={i.id}
                                  onClick={handleUpdateOrder}
                                  className="input">🗸</Button>
                              </ul>)}
         </nav>
        </section>

        <section>
          <h2 className="title">Pedidos Finalizados</h2>
          <nav>
            <ul className='oneLine headerColumns'>
              {headerFinished.map((title, index) => <Grid key={index} item={title} />)}
            </ul>
            {orders.filter((item) => item.status === 'done')
              .map((i) => <ul key={i.id} className='oneLine'>
                                <Grid item={i.id} />
                                <Grid item={i.client_name} />
                                <Grid item={i.Products.length} />
                                <Grid item={i.user_id} />
                                <Grid item={timeDuration(i.processedAt, i.createdAt)} />
                              </ul>)}
         </nav>
        </section>
      </main>
  );
};
