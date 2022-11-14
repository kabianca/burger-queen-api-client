import React from "react";
import { HeaderService } from "../../components/Header/Header";
import styles from "./orders.module.css";

export const Orders = () => {

    return (
      <>
        <HeaderService/>
        <h2 className={styles.title}>Pronto para Entrega</h2>
        <table className={styles.delivery}>
          <tbody>
            <tr>
              <th className={styles.tableTitleD}>Pedido</th>
              <th className={styles.tableTitleD}>Cliente</th>
              <th className={styles.tableTitleD}>Mesa</th>
              <th className={styles.tableTitleD}>Valor</th>
              <th className={styles.tableTitleD}></th>
            </tr>
            <tr>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}><input type="submit" value="OK" className={styles.input} /></td>
            </tr>
            <tr>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}>teste</td>
              <td className={styles.deliveryRow}><input type="submit" value="OK"className={styles.input} /></td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.title}>Na Cozinha</h2>
        <table className={styles.kitchen}>
          <tbody>
            <tr>
              <th className={styles.tableTitleK}>Pedido</th>
              <th className={styles.tableTitleK}>Cliente</th>
              <th className={styles.tableTitleK}>Mesa</th>
              <th className={styles.tableTitleK}>Valor</th>
              <th className={styles.tableTitleK}>Tempo</th>
            </tr>
            <tr>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
            </tr>
            <tr>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
              <td className={styles.kitchenRow}>teste</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.title}>Pedidos Finalizados</h2>
        <table className={styles.finished}>
          <tbody>
            <tr>
              <th className={styles.tableTitleF}>Pedido</th>
              <th className={styles.tableTitleF}>Cliente</th>
              <th className={styles.tableTitleF}>Mesa</th>
              <th className={styles.tableTitleF}>Valor</th>
              <th className={styles.tableTitleF}>Tempo</th>
            </tr>
            <tr>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
            </tr>
            <tr>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
              <td className={styles.finishedRow}>teste</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };