import React from "react";
import { HeaderService } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { accessProducts } from "../../api/api";
import { filterMenu } from "../../api/main";
import {ButtonProducts, ButtonKitchen, SelectMenu } from "../../components/Buttons/Buttons";
import styles from "./menu.module.css";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [active, setActive] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [quantify, setQuantify] = useState(1);
  // const [client, setClient] = useState('');
  // const [table, setTable] = useState('');
  // const [total, setTotal] = useState();

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
  
  const handleType = ((e) => {
    setType(e.target.value);
    setActive(!active);
  });
  
  const replaceImages = (products) => {
    products.map((product) => product.image = `https://raw.githubusercontent.com/kabianca/burger-queen-api-client/Images/src/pages/menu/menu-img/${product.id}.png`)
  };
  
  replaceImages(products);
  
  let menu = filterMenu(products, type);
  
  const addProducts = (obj) => {
    const index = carrinho.findIndex((key) => key.id === obj.id);
    if (index === -1) {
      const total = [...carrinho, {...obj, quantify: 1}];
      setCarrinho(total);
    } else {
      setQuantify(carrinho[index].quantify += 1);
    }
  }
  
  // console.log(carrinho)

  function increase (item) {
    setQuantify(item.quantify += 1)
  }

  function decrease (item) {
    setQuantify(item.quantify -= 1)
  }

  const handleRemoveItem = (obj) => {
    const removeItem = carrinho.filter((key) => key !== obj)
    setCarrinho(removeItem)
  };

  return (
    <section className={styles.container}>
      <HeaderService />
      <div className={styles.btnMenu}>
        <SelectMenu
          onClick={handleType}
          className={active ? "btn_select" : "btn_select_active"}
          value={"breakfast"}>
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
            <input className={styles.input} id={styles.left} placeholder="Nome Cliente" type="text" />
            <input className={styles.input} placeholder="Mesa nº" type="text" />
            <p className={styles.title}> Pedido</p>
            <hr/>
          </div>
          <div id="draft">
            {carrinho.map((item) => {
              return (
                <section key={item.id} className={styles.item}>
                  <img src={item.image} alt="Icone do menu" className={styles.image}></img>
                  <div id={styles.infoProduct}>
                    <h1 className={styles.text}>{item.name}</h1>
                    <div className={styles.quantify}>
                      <AiFillMinusCircle
                        className={styles.minusPlus}
                        onClick={() => decrease(item)}
                      />
                      <h1 className={styles.text}>{item.quantify}</h1>
                      <AiFillPlusCircle 
                        className={styles.minusPlus}
                        onClick={() => increase(item)} 
                      />
                    </div>
                    <button className={styles.delete} onClick={() => handleRemoveItem(item)}>Excluir</button>
                  </div>
                  <div id={styles.priceBoxItem}>
                    <p className={styles.price}>R$</p>
                    <p className={styles.price}>{item.price}</p>
                  </div>
                </section>
              )
            })}
          </div>
          <div className={styles.btnKitchen}>
            <hr />
            <div className={styles.value}>
              <p className={styles.total}>Total</p>
              <p className={styles.total}>R$ 0</p>
            </div>
            <ButtonKitchen />
          </div>
        </section>
      </div>
    </section>
  );
};