import React from "react";
import { Card } from "./card";
import "../assets/styles/contenidoC.css";
import { Navbar } from "./Naver";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import mas from "../assets/Img/boton-mas.png"
import fond from "../assets/Img/fondd.png"
export const Contenido = () => {
  return (
    <>
      <Navbar />
      <div className="img_poster">
      <img className="fond" src={fond} alt="" />

      </div>
      <Link to="/Productos">
      <img src="" alt="" />
    <abbr title="Agregar Producto"><img className="mas" src={mas} alt="" /></abbr>

  </Link>
      <div className="ContenidoCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};
