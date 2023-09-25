import { useState } from "react";
import cicla from "../assets/Img/cicla.png";
import corazon from "../assets/Img/corazon.svg";
import corazonSelect from "../assets/Img/corazonSelect.svg";
import "../assets/styles/Card.css";
import { Link } from "react-router-dom";
import { useCarrito } from "../store/carritoStore";

export const Card = ({
  
  id_producto,
  nombre_producto,
  precio,
  color,
  img_producto,
}) => {
  
const {  incrementar }= useCarrito()
  

  const [fav, setFav] = useState(corazon)


const toggleFav = () =>{
  console.log("checkee")
if (fav) {
  setFav(fav === corazon ? corazonSelect : corazon)
  
} else {
  setFav(fav === corazon ? corazonSelect : corazon)
  
}


}


  let noImagen = false;



  
  // eslint-disable-next-line react/prop-types
  const colores = color.split(",");

  const linkimagen = "http://localhost:3050" + img_producto;

  if (linkimagen === "http://localhost:3050null") {
    noImagen = true;
  }

  

  return (
    <>
      <div className="contenedorCard" id={id_producto}>
        <Link to={`/Detalles/${id_producto}`}>
          <figure className="ImgProduct">
            {noImagen ? (
              <img src={cicla} alt="" />
            ) : (
              <img src={linkimagen} alt="" />
            )}
          </figure>
        </Link>
        <div className="info">
          <p className="tituloCard">{nombre_producto}</p>
          <div className="precioEstado">
            <p className="precio">{precio}</p>
            <p className="estado">Disponible</p>
          </div>
          <div className="colores">
            {colores.map((color, index) => (
              <div key={index} className={`${color}`}></div>
            ))}
          </div>
        </div>
        <hr />
        <div className="botonesHomeCard">
          <Link to="/Carrito" className="comprar">
            COMPRAR
          </Link>
          <div className="opciones">
            <button className="addCarrito" onClick={incrementar}>AGREGAR AL CARRITO</button>
            <div onClick={toggleFav} className="Favorito">
              <input type="checkbox" name="like" id="like" />
             <img src={fav} alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
