import HeaderService from "../../components/header/headerService";
import { useEffect, useState } from "react";
import { accessProducts } from "../../api/api";
import ButtonProducts from "../../components/buttonProducts/buttonProducts";
import SelectMenu from "../../components/selectMenu/selectMenu";

import "./menu.css";

export const Menu = () => {
  const [products, setProducts] = useState([]);

  // function printProducts(array) {
  //   document.querySelector('#print-products').innerHTML = array.map((arr) => <ButtonProducts>{arr.name}</ButtonProducts>)
  // }

  useEffect(() => {
    accessProducts()
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);
  console.log(products);

    return (
      <section className="menu-container">
        <HeaderService></HeaderService>
        <div id="buttons-select-menu">
          <SelectMenu> Café da Manhã</SelectMenu>
          <SelectMenu> Principal</SelectMenu>
        </div>
        <div id="menu-shopping">
          <section id="menu">
            {products.map((products) => <ButtonProducts>{products}</ButtonProducts>)}
          </section>
          <section id="shopping-car"></section>
        </div>
      </section>
    );
  };