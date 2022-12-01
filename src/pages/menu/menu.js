import React, { useEffect, useState } from "react";
import { HeaderAdmin, HeaderService } from "../../components/Header/Header";
import { accessProducts, createOrder, getRole } from "../../api/api";
import { ButtonProducts } from "../../components/Buttons/ButtonProducts";
import { ButtonComplements } from "../../components/Buttons/ButtonComplements";
import { Button } from "../../components/Buttons/Button";
import "./menu.css";
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

  const handleMenuChoice = ((e) => {
    setType(e.target.value);
    setActive(e.target.value);
  });

  function filterMenu(products, search) {
    return search === "breakfast" || search === "all-day" ?
    products.filter((product) => product.type === search && product.complement === null) :
    products.filter((product) => product.name=== search)
  };

  let filterProducts = filterMenu(products, type);
  
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

  const printProducts = (obj) => {
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
    <div className="container">
      {(getRole() === "service") ? <HeaderService /> : <HeaderAdmin />}
      <section className="choiceMenu">
        <Button
          onClick={handleMenuChoice}
          className={(active === 'breakfast') ? "btnMenuActive" : "btnMenu"}
          value="breakfast"
          text="Café da Manhã"
        />
        <Button
          onClick={handleMenuChoice}
          className={(active === "all-day") ? "btnMenuActive" : "btnMenu"}
          value="all-day"
          text="Principal"
        />
      </section>
      <main className="menuItems">
        <section className="itens">
          { filterProducts.length < 4 ?
            filterProducts.map((product) => <ButtonComplements key={product.id} onClick={() => printProducts(product)}>{product}</ButtonComplements>) :
            filterProducts.map((product) => <ButtonProducts key={product.id} onClick={() => product.sub_type === 'hamburguer' ? complements(product) : printProducts(product)}>{product}</ButtonProducts>)
          }
        </section>
        <aside className="cart">
          <input
            onChange={(e) => setClient(e.target.value)}
            className="infoClient"
            id="left"
            placeholder="Nome Cliente"
            type="text"
          />
          <input
            onChange={(e) => setTable(e.target.value)}
            className="infoClient"
            placeholder="Mesa nº"
            type="text"
          />
          <p className="titleCart"> Pedido</p>
          <hr/>
          <section className="itensCart">
            {cart.map((item) => {
              return (
                <article key={item.id} className="itemCart">
                  <img src={item.image} alt="Icone do produto" className="image"></img>
                  <h2 className="itemName">{item.name}</h2>
                  <p className="itemPrice">R$ {item.price}</p>
                  <div className="editQuantify">
                    <AiFillMinusCircle
                      className="minusPlus"
                      onClick={() => decrease(item)} 
                    />
                    <p className="quantify">{item.qtd}</p>
                    <AiFillPlusCircle 
                      className="minusPlus"
                      onClick={() => increase(item)} 
                    />
                    <p className="complement">{item.complement ? "+ " + item.complement : ""}</p>
                    <button className="delete" onClick={() => handleRemoveItem(item)}>Excluir</button>
                  </div>
                </article>
              )
            })}
          </section>
          <section>
            <div className="sumTotal">
              <h2 className="total">Total</h2>
              <p className="total">R$ {total}</p>
            </div>
            <Button onClick={handleCreateOrder} className="kitchen" text="Enviar para cozinha"/>
          </section>
        </aside>
      </main>
    </div>
  );
};