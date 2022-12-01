import React, {useEffect, useState} from "react";
import { getRole, accessOrders } from "../../api/api";
import { HeaderService, HeaderAdmin } from "../../components/Header/Header";
import styles from "./orders.module.css";
import { Button } from "../../components/Buttons/Button";

export const Orders = () => {
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
      <main className={styles.container}>
        {(getRole() === "service") ? <HeaderService /> : <HeaderAdmin />}
        <Button onClick={loadOrders} className="kitchen" text="Consultar Novos Pedidos"/>
        <section className={styles.table}>
          <h2 className={styles.title}>Pronto para Entrega</h2>
          <table className={styles.delivery}>
            <thead>
              <tr className="row-table">
                <th className={styles.tableTitleD}>Id</th>
                <th className={styles.tableTitleD}>Cliente</th>
                <th className={styles.tableTitleD}>Mesa</th>
                <th className={styles.tableTitleD}>Valor</th>
                <th className={styles.tableTitleD}></th>
              </tr>
            </thead>
            <tbody>
              {orders.filter((item => item.status === 'ready')).map((item) => {
                return(
                  <tr key={item.id} className="row-table">
                    <td className={styles.deliveryColumn}>{item.id}</td>
                    <td className={styles.deliveryColumn}>{item.client_name}</td>
                    <td className={styles.deliveryColumn}>{item.table}</td>
                    <td className={styles.deliveryColumn}>{item.value}</td>
                    <td className={styles.deliveryColumn}><input type="submit" value="OK" className={styles.input} /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

        <section className={styles.table}>
          <h2 className={styles.title}>Na Cozinha</h2>
          <table className={styles.kitchen}>
            <tbody>
              <tr className="row-table">
                <th className={styles.tableTitleK}>Pedido</th>
                <th className={styles.tableTitleK}>Cliente</th>
                <th className={styles.tableTitleK}>Mesa</th>
                <th className={styles.tableTitleK}>Valor</th>
                <th className={styles.tableTitleK}>Tempo</th>
              </tr>
              {orders.filter((item => item.status === 'pending')).map((item) => {
                return(
                  <tr key={item.id} className="row-table">
                    <td className={styles.kitchenColumn}>{item.id}</td>
                    <td className={styles.kitchenColumn}>{item.client_name}</td>
                    <td className={styles.kitchenColumn}>{item.table}</td>
                    <td className={styles.kitchenColumn}>{item.value}</td>
                    <td className={styles.kitchenColumn}>{item.processedAt}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
        
        <section className={styles.table}>
          <h2 className={styles.title}>Pedidos Finalizados</h2>
          <table className={styles.finished}>
            <tbody>
              <tr className="row-table">
                <th className={styles.tableTitleF}>Pedido</th>
                <th className={styles.tableTitleF}>Cliente</th>
                <th className={styles.tableTitleF}>Mesa</th>
                <th className={styles.tableTitleF}>Valor</th>
                <th className={styles.tableTitleF}>Tempo</th>
              </tr>
              {orders.filter((item => item.status === 'done')).map((item) => {
                return(
                  <tr key={item.id} className="row-table">
                    <td className={styles.finishedColumn}>{item.id}</td>
                    <td className={styles.finishedColumn}>{item.client_name}</td>
                    <td className={styles.finishedColumn}>{item.table}</td>
                    <td className={styles.finishedColumn}>{item.value}</td>
                    <td className={styles.finishedColumn}>{item.processedAt}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      </main>
    );
  };