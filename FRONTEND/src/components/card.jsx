import React from "react";
import cicla from "../assets/Img/cicla.png";
import "../assets/styles/Card.css";
import {Link} from "react-router-dom"
export const Card = () => {
  return (
    <>
      <div className="contenedorCard">
       <Link to='/Detalles'>
       <figure className="ImgProduct">
          <img src={cicla} alt="" />
        </figure>
       </Link>
        <div className="info">
          <p className="tituloCard">Bicicleta ONE 0 ONE 121</p>
          <div className="precioEstado">
            <p className="precio">$5.499.000</p>
            <p className="estado">Disponible</p>
          </div>
          <div className="colores">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
            <div className="color4"></div>
          </div>
        </div>
        <hr />
        <div className="botonesHomeCard">
          <button className="comprar"><Link to='/Carrito'>COMPRAR</Link></button>
          <div className="opciones">
            <button className="addCarrito">AGREGAR AL CARRITO</button>
            <button className="Favorito">
              <img src={cicla} alt="Favorito" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
