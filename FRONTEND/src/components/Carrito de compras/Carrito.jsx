import React from "react";
import "../../assets/styles/Carrito.css"
import cicla from "../../assets/Img/cicla.png";
import {Navbar} from "../Naver";
import {Footer} from "../footer";

export const Carrito = () => {
  return (
    <>
    
    <Navbar/>
    <h1 className="titulo">Carrito De Compras</h1>

    <header class="header">
        <h2 className="producto">Producto</h2>
        <div className="opcion">
        <h2 class="">Cantidad</h2>
        <h2 class="">Total</h2>
        </div>
    </header>
<hr></hr>


<div className="carr1">
    
<div className="img_cicla">
    <img src={cicla} alt="" />
</div>

<div className="precio">
<h2>Bicicleta ONE O ONE 121</h2>
    <h3>$5.900.000</h3>
</div>
<div className="cantidad">
      <h3>cantidad</h3>
     <input type="number" name="" id="" className="input-can" /></div>
<h2>$5.900.000</h2>
</div>

<hr></hr>

<div className="carr2">
    <div className="tex">
    <h3>Agrega una nota a tu pedido</h3>
<textarea className="mensaje"> </textarea> 
 </div>

<div className="press">
<h2>$5.900.000</h2>
<h4 className="im">Impuestos incluidos, envio calculado al finalizar la comprav</h4>
<button className="addCarrito">AGREGAR AL CARRITO</button>
</div>

</div>

<Footer/>
    </>
  );
};
