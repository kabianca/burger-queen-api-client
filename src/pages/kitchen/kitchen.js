import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../api/api";
import {HeaderKitchen} from "../../components/Header/Header";

export const Kitchen = () => {
  const navigate = useNavigate();
  
  useEffect(()=> {
    if (!getToken()) {
      navigate("/")
    }
  }, [navigate])
  
  return (
    <section className="App">
      <HeaderKitchen/>
      <h1>Cozinha em Construção</h1>
    </section>
  );
  };