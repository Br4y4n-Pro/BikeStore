import React from "react";
import { Navbar } from "../Naver";
import { Footer } from "../footer";
import "../../assets/styles/accesorios.css"
import alforja from "../../assets/Img/Accesorios/alforja.jpg";
import bomba from "../../assets/Img/Accesorios/Bomba de aire.jpg";
import candado from "../../assets/Img/Accesorios/candado.jpg";
import casco from "../../assets/Img/Accesorios/casco.jpeg";
import ciclometro from "../../assets/Img/Accesorios/Ciclómetro .jpg";
import espejo from "../../assets/Img/Accesorios/Espejo.jpg";
import gafas from "../../assets/Img/Accesorios/gafas.jpg";
import guantes from "../../assets/Img/Accesorios/guantes.jpeg";
import guardabarros from "../../assets/Img/Accesorios/Guardabarros.jpg";
import luces from "../../assets/Img/Accesorios/luces.jpg";
import portabotellas from "../../assets/Img/Accesorios/Portabotellas.jpg";
import portaequipaje from "../../assets/Img/Accesorios/Portaequipajes.jpg";
import sillin from "../../assets/Img/Accesorios/Sillín.jpg";
import timbre from "../../assets/Img/Accesorios/Timbre.jpg";
import pedales from "../../assets/Img/Accesorios/pedales.jpg";
import frenodisco from "../../assets/Img/Accesorios/freno disco.jpg";

export const Accesorios = () => {
  return (
 <>
 <Navbar />
      <h1 className="tit">ACCESORIOS</h1>
  <div className="todos">
  <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={alforja} alt="image equilibrium"></img>
            <div className="capa">
              <h1>ALFORJA</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={bomba} alt="image equilibrium"></img>
            <div className="capa">
              <h1>BOMBA DE AIRE</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={candado} alt="image equilibrium"></img>
            <div className="capa">
              <h1>CANDADO</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={casco} alt="image equilibrium"></img>
            <div className="capa">
              <h1>CASCO</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={ciclometro} alt="image equilibrium"></img>
            <div className="capa">
              <h1>CICLOMETRO</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={espejo} alt="image equilibrium"></img>
            <div className="capa">
              <h1>ESPEJO</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={gafas} alt="image equilibrium"></img>
            <div className="capa">
              <h1>GAFAS</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={guantes} alt="image equilibrium"></img>
            <div className="capa">
              <h1>GUATES</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={guardabarros} alt="image equilibrium"></img>
            <div className="capa">
              <h1>GUARDABARROS</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={luces} alt="image equilibrium"></img>
            <div className="capa">
              <h1>LUCES</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={portabotellas} alt="image equilibrium"></img>
            <div className="capa">
              <h1>PORTA BOTELLA</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={portaequipaje} alt="image equilibrium"></img>
            <div className="capa">
              <h1>PORTA EQUIPAJE</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={sillin} alt="image equilibrium"></img>
            <div className="capa">
              <h1>SILLÍN</h1>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={timbre} alt="image equilibrium"></img>
            <div className="capa">
              <h1>TIMBRE</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={pedales} alt="image equilibrium"></img>
            <div className="capa">
              <h1>PEDALES</h1>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="espacio-imagen">
          <img className="principal-image" src={frenodisco} alt="image equilibrium"></img>
            <div className="capa">
              <h1>FRENO DISCO</h1>
            </div>
        </div>
      </div>
  </div>
    </>
  );
};
