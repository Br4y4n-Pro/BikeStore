import React from "react";
import { Card } from "./card";
import "../assets/styles/contenidoC.css";
import { Navbar } from "./Naver";
import { Footer } from "./footer";
export const Contenido = () => {
  return (
    <>
      <Navbar />
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
