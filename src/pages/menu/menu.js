import HeaderService from "../../components/Header/HeaderService";
import { useEffect, useState } from "react";
import { accessProducts } from "../../api/api";
import { filterMenu } from "../../api/main";
import ButtonProducts from "../../components/Buttons/ButtonProducts";
import SelectMenu from "../../components/Buttons/SelectMenu";
import ButtonKitchen from "../../components/Buttons/ButtonKitchen";

import styles from "./menu.module.css";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    accessProducts()
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);

  // console.log(products);

  const handleType = (e => setType(e.target.value));
  let menu = filterMenu(products, type);

  return (
    <section className={styles.container}>
      <HeaderService/>
      <div className={styles.btnMenu}>
        <SelectMenu onClick={handleType} value={"breakfast"}> Café da Manhã</SelectMenu>
        <SelectMenu onClick={handleType} value={"all-day"}> Principal</SelectMenu>
      </div>
      <div className={styles.menuShopping}>
        <section className={styles.menu}>
          {menu.map((product) => <ButtonProducts key={product.id}>{product}</ButtonProducts>)}
        </section>
        <section className={styles.shoppingCar}>
          <div className={styles.headerCar}>
            <input className={styles.input} type="text" />
            <input className={styles.input}type="text" />
            <h1 className={styles.title}> Pedido:</h1>
            <hr />
          </div>
          <div className={styles.btnKitchen}>
            <hr />
            <h1 className={styles.total}>Total: </h1>
            <ButtonKitchen />
          </div>
        </section>
      </div>
    </section>
  );
};