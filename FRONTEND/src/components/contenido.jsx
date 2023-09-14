import React from "react";
import { Card } from "./card";
import "../assets/styles/contenidoC.css";
import { Navbar } from "./Naver";
import { Footer } from "./footer";
import { Link } from "react-router-dom";

export const Contenido = () => {
  return (
    <>
      <Navbar />
      <Link to="/Productos">IR AL FORMULARIO DE PRODUCTO</Link>
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
