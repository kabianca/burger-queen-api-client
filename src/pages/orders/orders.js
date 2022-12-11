import React, { useState } from 'react';
import { getRole, accessOrders } from '../../api/api';
import { HeaderService, HeaderAdmin } from '../../components/Header/Header.jsx';
import './orders.css';
import { Button } from '../../components/Buttons/Button.jsx';
import Timer from '../../components/Timer.jsx';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const loadOrders = () => {
    accessOrders()
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  };

  // useEffect(() => {
  //   loadOrders();
  // }, []);

  return (
      <main className="container">
        {(getRole() === 'service') ? <HeaderService /> : <HeaderAdmin />}
        <Button onClick={loadOrders} className="reload" text="Consultar Novos Pedidos"/>

       <section className="table">
         <h2 className="title">Na Cozinha</h2>
         <table className="kitchen">
           <tbody>
             <tr className="row-table">
               <th className="tableTitleK">Pedido</th>
               <th className="tableTitleK">Cliente</th>
               <th className="tableTitleK">Mesa</th>
               <th className="tableTitleK">Valor</th>
               <th className="tableTitleK">Tempo</th>
             </tr>
             {orders.filter(((item) => item.status === 'pending')).map((item) => (
                  <tr key={item.id} className="row-table">
                    <td className="kitchenColumn">{item.id}</td>
                    <td className="kitchenColumn">{item.client_name}</td>
                    <td className="kitchenColumn">{item.table}</td>
                    <td className="kitchenColumn">{item.value}</td>
                    <td className="kitchenColumn">{item.processedAt}</td>
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
               <th className="tableTitleK">Qnt de Itens</th>
               <th className="tableTitleK">Tempo</th>
             </tr>
             {orders.filter(((item) => item.status === 'ready')).map((item) => (
                  <tr key={item.id} className="row-table">
                    <td className="kitchenColumn">{item.id}</td>
                    <td className="kitchenColumn">{item.client_name}</td>
                    <td className="kitchenColumn">{item.number}</td>
                    <td className="kitchenColumn">{item.value}</td>
                    <td className="kitchenColumn"><Timer /></td>
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
                    <td className="finishedColumn">{item.processedAt}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
  );
};
