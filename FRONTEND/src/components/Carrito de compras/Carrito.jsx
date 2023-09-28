import React from "react";
import "../../assets/styles/Carrito.css";
import cicla from "../../assets/Img/cicla.png";
import { Navbar } from "../Naver";
import { Footer } from "../footer";
import { useCarrito } from "../../store/carritoStore";

export const Carrito = () => {
  const { carrito } = useCarrito();


  return (
    <>
      <Navbar />
    <div className="contenedor_carrito">
    <h1 className="titulo">Carrito De Compras</h1>

<header class="header">
  <p className="producto">Producto</p>
  <div className="opcion">
    <p class="">Cantidad</p>
    <p class="">Total</p>
  </div>
</header>
<hr></hr>

{carrito.map((producto) => (
  <div key={producto.id_producto} className="carr1">
    <div className="img_cicla">
      <img src={`http://localhost:3050${producto.img_producto}`} alt="" />
    </div>

    <div className="precio">
      <p>{producto.nombre_producto}</p>
      <p>{producto.precio}</p>
    </div>
    <div className="cantidad">
      <p>cantidad</p>
      <input type="number" name="" id="" className="input-can" />
    </div>
    <p>{producto.precio}</p>
  </div>
))}

<hr></hr>

<div className="carr2">
  <div className="tex">
    <h3>Agrega una nota a tu pedido</h3>
    <textarea className="mensaje"> </textarea>
  </div>

  <div className="press">
    <h2>$5.900.000</h2>
    <h4 className="im">
      Impuestos incluidos, envio calculado al finalizar la comprav
    </h4>
    <button className="addCarrito">AGREGAR AL CARRITO</button>
  </div>
</div>
    </div>

      <Footer />
    </>
  );
};
