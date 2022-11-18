import React from "react";
import { HeaderService } from "../../components/Header/Header";
import styles from "./orders.module.css";

// substituir pelos pedidos reais presentes na base de dados
const teste = [{
  "id": 1,
  "client_name": "Pedro",
  "user_id": 12,
  "table": 1,
  "status": "cozinha",
  "processedAt": "2022-11-17",
  "createdAt": "2022-11-17",
  "updatedAt": "2022-11-17",
  "Products": [
    {
      "id": 10,
      "name": "suco",
      "flavor": "laranja",
      "complement": "string",
      "qtd": 1
    }
  ]
},
{
  "id": 28,
  "client_name": "Elisa",
  "user_id": 12,
  "table": 10,
  "status": "entrega",
  "processedAt": "2022-11-17",
  "createdAt": "2022-11-17",
  "updatedAt": "2022-11-17",
  "Products": [
    {
      "id": 10,
      "name": "suco",
      "flavor": "laranja",
      "complement": "string",
      "qtd": 1
    }
  ]
},
{
  "id": 13,
  "client_name": "Maria",
  "user_id": 12,
  "table": 15,
  "status": "finalizado",
  "processedAt": "2022-11-17",
  "createdAt": "2022-11-17",
  "updatedAt": "2022-11-17",
  "Products": [
    {
      "id": 10,
      "name": "suco",
      "flavor": "laranja",
      "complement": "string",
      "qtd": 1
    }
  ]
}];

export const Orders = () => {

    return (
      <>
        <HeaderService/>
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
              {teste.filter((item => item.status === 'entrega')).map((item) => {
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
              {teste.filter((item => item.status === 'cozinha')).map((item) => {
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
              {teste.filter((item => item.status === 'finalizado')).map((item) => {
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
      </>
    );
  };