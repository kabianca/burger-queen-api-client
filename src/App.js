import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Menu } from './pages/menu/menu';
import { Orders } from './pages/orders/orders';
import { Kitchen } from './pages/kitchen/kitchen';
import './index.css';

const App = () => (
  <BrowserRouter className="app">
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/kitchen" element={<Kitchen />} />
    </Routes>
  </BrowserRouter>
);

export default App;
