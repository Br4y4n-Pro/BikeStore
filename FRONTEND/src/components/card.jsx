import cicla from "../assets/Img/cicla.png";
import corazon from "../assets/Img/colores detalles/corazon.png";
import "../assets/styles/Card.css";
import { Link } from "react-router-dom";
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
  let noImagen = false;
  // eslint-disable-next-line react/prop-types
  const colores = color.split(",");
  // console.log(colores)

  const linkimagen = "http://localhost:3050" + img_producto;

  if (linkimagen === "http://localhost:3050null") {
    noImagen = true;
  }
  console.log(linkimagen);

  return (
    <>
      <div className="contenedorCard" id={id_producto}>
        <Link to={`/Detalles/Bicicleta/${id_producto}`}>
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
