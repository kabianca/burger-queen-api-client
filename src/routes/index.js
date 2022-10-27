import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Menu } from "../pages/menu/menu";
import { Orders } from "../pages/orders/orders";
import { Kitchen } from "../pages/kitchen/kitchen";
import "../index.css";

const RoutesBurger = () => {
  // a condicional das páginas vai entrar aqui
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </Fragment> 
    </BrowserRouter>
  );
};

export default RoutesBurger;