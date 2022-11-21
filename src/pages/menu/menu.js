import React from "react";
import { HeaderAdmin, HeaderService } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { accessProducts, createOrder, getRole } from "../../api/api";
import { filterMenu } from "../../api/main";
import {ButtonProducts, ButtonComplements, ButtonKitchen, SelectMenu } from "../../components/Buttons/Buttons";
import styles from "./menu.module.css";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";


export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [active, setActive] = useState('');
  const [cart, setCart] = useState([]);
  const [quantify, setQuantify] = useState(1);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    accessProducts()
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleType = ((e) => {
    setType(e.target.value);
    setActive(e.target.value);
  });

  let menu = filterMenu(products, type);
  
  const replaceImages = (products) => {
    products.forEach((product) => {
      product.image = `https://raw.githubusercontent.com/kabianca/burger-queen-api-client/Images/src/pages/menu/menu-img/${product.id}.png`
      if(product["sub_type"] === "hamburguer"){
        product.price < 15 ? product.name = product.flavor + " simples" : product.name = product.flavor + " duplo"
      }
    })
  };
  
  replaceImages(products);
  
  const total = cart.reduce((total, produto) => total + (produto.price * produto.qtd), 0);

  const addProducts = (obj) => {
    const index = cart.findIndex((key) => key.id === obj.id);
    if (index === -1) {
      const itensOrder = [...cart, {...obj, qtd: 1}];
      setCart(itensOrder);
    } else {
      setQuantify(cart[index].qtd += 1);
      console.log(quantify);
    }
    if(obj.sub_type==="hamburguer"){
      setType("all-day")
    }
  }

  const complements = (obj) => {
    setType(obj.name);
  }
  
  function increase (item) {
    setQuantify(item.qtd += 1);
  }

  function decrease (item) {
    item.qtd -= 1;
    item.qtd === 0 ? handleRemoveItem(item) : setQuantify(item.qtd);
    
  }

  const handleRemoveItem = (obj) => {
    const removeItem = cart.filter((key) => key !== obj);
    setCart(removeItem);
  };

  const order = {
    client: client,
    table: table,
    products:
      cart.map((item) => {
        const cartItens = {
          id: item.id,
          name: item.name,
          flavor: item.flavor,
          complement: item.complement,
          qtd: item.qtd,
        };
        return cartItens
      }),
  }
  const handleCreateOrder = (e) => {
    e.preventDefault();
    createOrder(order)
      .then((response) => response.json())
          .then((obj) => {
            if (obj.code) {
              throw (obj.message)
            } else {
              return obj
            }
          })
          .then((data) => {
            console.log(data);
            setCart([]);
          })
          .catch((error) => console.log(error));
  }

  return (
    <div className={styles.container}>
      {(getRole() === "service") ? <HeaderService /> : <HeaderAdmin />}
      <div className={styles.btnMenu}>
        <SelectMenu
          onClick={handleType}
          className={(active === 'breakfast') ? styles.btn_select_active : styles.btn_select}
          value={"breakfast"}>
          Café da Manhã
        </SelectMenu>
        <SelectMenu
          onClick={handleType}
          className={(active === "all-day") ? styles.btn_select_active : styles.btn_select}
          value={"all-day"}>
          Principal
        </SelectMenu>
      </div>
      <main className={styles.menuShopping}>
        <section className={styles.menu}>
          { menu.length < 4 ?
            menu.map((product) => <ButtonComplements key={product.id} onClick={() => addProducts(product)}>{product}</ButtonComplements>) :
            menu.map((product) => <ButtonProducts key={product.id} onClick={() => product.sub_type === 'hamburguer' ? complements(product) : addProducts(product)}>{product}</ButtonProducts>)
          }
        </section>
        <aside className={styles.shoppingCar}>
          <section className={styles.headerCar}>
            <input
              onChange={(e) => setClient(e.target.value)}
              className={styles.input}
              id={styles.left}
              placeholder="Nome Cliente"
              type="text"
            />
            <input
              onChange={(e) => setTable(e.target.value)}
              className={styles.input}
              placeholder="Mesa nº"
              type="text"
            />
            <p className={styles.title}> Pedido</p>
            <hr/>
          </section>
          <div id={styles.draft}>
            {cart.map((item) => {
              return (
                <section key={item.id} className={styles.item}>
                  <p id={styles.complement}>{item.complement ? "+ " + item.complement : ""}</p>
                  <div id={styles.all}>
                    <img src={item.image} alt="Icone do menu" className={styles.image}></img>
                    <div id={styles.infoProduct}>
                      <h1 className={styles.text}>{item.name}</h1>
                      <div className={styles.quantify}>
                        <AiFillMinusCircle
                          className={styles.minusPlus}
                          onClick={() => decrease(item)}
                        />
                        <h1 className={styles.text}>{item.qtd}</h1>
                        <AiFillPlusCircle 
                          className={styles.minusPlus}
                          onClick={() => increase(item)} 
                        />
                      </div>
                      <button className={styles.delete} onClick={() => handleRemoveItem(item)}>Excluir</button>
                    </div>
                  </div>
                  <div id={styles.priceBoxItem}>
                    <p className={styles.price}>R$</p>
                    <p className={styles.price}>{item.price}</p>
                  </div>
                </section>
              )
            })}
          </div>
          <section className={styles.btnKitchen}>
            <hr />
            <table className={styles.tableCar}>
              <tbody className={styles.value}>
                <tr className={styles.tableRow}>
                  <td className={styles.total}>Total</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.total}>R$ {total}</td>
                </tr>
              </tbody>
            </table>
            <ButtonKitchen
              onClick={handleCreateOrder} />
          </section>
        </aside>
      </main>
    </div>
  );
};