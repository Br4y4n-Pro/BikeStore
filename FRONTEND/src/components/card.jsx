import cicla from "../assets/Img/cicla.png";
import corazon from "../assets/Img/colores detalles/corazon.png";
import "../assets/styles/Card.css";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../store/productoFetchStore";

export const Card = ({
  id_producto,
  nombre_producto,
  descripcion,
  precio,
  stock,
  categoria,
  tipo,
  marca,
  color,
  img_producto,
}) => {


  return (
    <>
      <div className="contenedorCard">
        <Link to="/Detalles/${id_producto}">
          <figure className="ImgProduct">
            <img src={cicla} alt="" />
          </figure>
        </Link>
        <div className="info">
          <p className="tituloCard">{nombre_producto}</p>
          <div className="precioEstado">
            <p className="precio">{precio}</p>
            <p className="estado">Disponible</p>
          </div>
          <div className="colores">
           {/* {
            color.forEach((color) => {
              <div key={color}  className={color}> hola</div>
            })
           } */}
          </div>
        </div>
        <hr />
        <div className="botonesHomeCard">
          <button className="comprar">
            <Link to="/Carrito">COMPRAR</Link>
          </button>
          <div className="opciones">
            <button className="addCarrito">AGREGAR AL CARRITO</button>
            <button className="Favorito">
              <img src={corazon} alt="Favorito" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
