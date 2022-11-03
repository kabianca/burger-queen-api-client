import HeaderService from "../../components/header/headerService";
import { useEffect, useState } from "react";
import { accessProducts } from "../../api/api";
import ButtonProducts from "../../components/buttonProducts/buttonProducts";

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
  
  // printProducts(products)
console.log(products)

    return (
      <section className="App">
        <HeaderService></HeaderService>
        <h1>Cardápio em Construção</h1>
        {products.map((product) => <ButtonProducts>{product}</ButtonProducts>)}
      </section>
    );
  };