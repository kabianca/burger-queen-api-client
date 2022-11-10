import React from "react";
import { HeaderService } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { accessProducts } from "../../api/api";
import { filterMenu } from "../../api/main";
import {ButtonProducts, ButtonKitchen, SelectMenu } from "../../components/Buttons/Buttons";
import ItemCar from "../../components/itemInCar/item";
import styles from "./menu.module.css";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [active, setActive] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    accessProducts()
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);

  useEffect(() => {
      setCarrinho(carrinho);
  }, [carrinho])

  const addProducts = (obj) => {
    const total = [...carrinho, obj];
    setCarrinho(total);
  }

  const replaceImages = (products) => {
    products.map((product) => product.image = `https://raw.githubusercontent.com/kabianca/burger-queen-api-client/Images/src/pages/menu/menu-img/${product.id}.png`)
  };
  // console.log(products);
  replaceImages(products);
  
  const handleType = ((e) => {
    setType(e.target.value);
    setActive(current => !current);
  });

  let menu = filterMenu(products, type);

  const handleRemoveItem = (obj) => {
    const removeItem = carrinho.filter((key) => key !== obj)
    setCarrinho(removeItem)
    console.log(removeItem)
  };

  return (
    <section className={styles.container}>
      <HeaderService />
      <div className={styles.btnMenu}>
        <SelectMenu
          onClick={handleType}
          value={"breakfast"}
          style={{
            backgroundColor: active ? '#EBCE39' : '#403B3C',
            color: active ? '#000' : '#FFF',
          }}>
          Café da Manhã
        </SelectMenu>
        <SelectMenu
          onClick={handleType}
          value={"all-day"}>
          Principal
        </SelectMenu>
      </div>
      <div className={styles.menuShopping}>
        <section className={styles.menu}>
          {menu.map((product) => <ButtonProducts key={product.id} onClick={() => addProducts(product)}>{product}</ButtonProducts>)}
        </section>
        <section className={styles.shoppingCar}>
          <div className={styles.headerCar}>
            <input className={styles.input} type="text" />
            <input className={styles.input} type="text" />
            <h1 className={styles.title}> Pedido:</h1>
            <hr />
            {carrinho.map((item) => <ItemCar key={item.id} onClick={() => handleRemoveItem(item)}>{item}</ItemCar>)}
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