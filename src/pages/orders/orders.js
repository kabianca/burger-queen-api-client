import React, { useState } from 'react';
import { accessOrders, updateOrders } from '../../api/api';
import { timeDuration, cookingTime } from '../../imports/imports';
import { Header } from '../../components/Header/Header.jsx';
import { Button } from '../../components/Buttons/Button.jsx';
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

       <section className="table">
         <h2 className="title">Na Cozinha</h2>
         <table className="kitchen">
           <tbody>
             <tr className="row-table">
               <th className="tableTitleK">Pedido</th>
               <th className="tableTitleK">Cliente</th>
               <th className="tableTitleK">Mesa</th>
               <th className="tableTitleK">Qnt de itens</th>
               <th className="tableTitleK">Hora</th>
             </tr>
             {orders.filter(((item) => item.status === 'pending')).map((item) => (
                <tr key={item.id} className="row-table">
                  <td className="kitchenColumn">{item.id}</td>
                  <td className="kitchenColumn">{item.client_name}</td>
                  <td className="kitchenColumn">{item.table}</td>
                  <td className="kitchenColumn">{item.Products.length}</td>
                  <td className="kitchenColumn">{cookingTime(item.createdAt, time)}</td>
                </tr>
             ))}
            </tbody>
          </table>
        </section>

        <section className="table">
         <h2 className="title">Pronto para Entrega</h2>
         <table className="kitchen">
           <tbody>
             <tr className="row-table">
               <th className="tableTitleK">Pedido</th>
               <th className="tableTitleK">Cliente</th>
               <th className="tableTitleK">Mesa</th>
               <th className="tableTitleK">Valor</th>
               <th className="tableTitleK"></th>
             </tr>
             {orders.filter(((item) => item.status === 'ready')).map((item) => (
                  <tr key={item.id} className="row-table">
                    <td className="kitchenColumn">{item.id}</td>
                    <td className="kitchenColumn">{item.client_name}</td>
                    <td className="kitchenColumn">{item.table}</td>
                    <td className="kitchenColumn">{item.value}</td>
                    <td className="kitchenColumn"><input
                                                    data-id={item.id}
                                                    type="submit"
                                                    value="🗸"
                                                    onClick={handleUpdateOrder}
                                                    className="input"/></td>
                  </tr>
             ))}
            </tbody>
          </table>
        </section>

        <section className="table">
          <h2 className="title">Pedidos Finalizados</h2>
          <table className="finished">
            <tbody>
              <tr className="row-table">
                <th className="tableTitleF">Pedido</th>
                <th className="tableTitleF">Cliente</th>
                <th className="tableTitleF">Mesa</th>
                <th className="tableTitleF">Tempo</th>
              </tr>
              {orders.filter(((item) => item.status === 'done')).map((item) => (
                  <tr key={item.id} className="row-table">
                    <td className="finishedColumn">{item.id}</td>
                    <td className="finishedColumn">{item.client_name}</td>
                    <td className="finishedColumn">{item.table}</td>
                    <td className="finishedColumn">{timeDuration(item.processedAt, item.createdAt)}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
  );
};
