import "../../assets/styles/detalles.css";
import { Navbar } from "../Naver";
import { Footer } from "../footer";
// import cicla from "../../assets/Img/cicla.png";
import talla from "../../assets/Img/colores detalles/gobernante.png";
import favorito from "../../assets/Img/colores detalles/corazon.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Detalles = () => {
  const { detalleCicla } = useParams();
  console.log(detalleCicla)
  const [data, setData] = useState(null);
data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3050/productos/${detalleCicla}`
        );
        const data = await response.json();
        setData(data[0]);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [detalleCicla]);

  console.log(data)
  if (!data) {
    return (
      <div className="loader">
        <div className="wheel"></div>
      </div>
    ); // Puedes mostrar un indicador de carga mientras se obtienen los datos.
  }
const {
  nombre_producto,
  descripcion,
  precio,
  color,
  img_producto,}= data
  const colores = color.split(",");

  const linkimagen = "http://localhost:3050" + img_producto;
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="todo">
        <div className="container1">
          <div className="precio_titulo">
            <h1 className="titulo">{nombre_producto}</h1>
            <br></br>
            <h2 className="precio">$ {precio}</h2>
            <br></br>
          </div>
          <img className="cicla" src={linkimagen} alt="" />

          <div className="descripcion">
            <h2>Descripcion</h2>
            {descripcion}
              
          </div>
          <div>
          </div>
          <br></br>
        </div>

        <div className="container2">

          <table className="tabla">
            <tbody>
              <tr>
                <th>Velocidades</th>
                <td>1X12 Velocidades</td>
              </tr>
              <tr>
                <th>Marco</th>
                <td>Solar en fibra de carbono uranium T800</td>
              </tr>
              <tr>
                <th>Amortiguador</th>
                <td>Sistema de neumatico con bloqueo remoto</td>
              </tr>
              <tr>
                <th>Bloqueo Remoto</th>
                <td>Si.</td>
              </tr>
              <tr>
                <th>Sistema de transmicion</th>
                <td>Sram SX Eagle 12 Velocidades</td>
              </tr>
              <tr>
                <th>Frenos</th>
                <td>Sram level. De disco hidraulicos</td>
              </tr>
              <tr>
                <th>Llantas</th>
                <td>Maxxis Aspen 29 x 2.1</td>
              </tr>
            </tbody>
          </table>

          <div className="colores">
            <br></br>
            <h2>Color</h2>
            <div className="colors-flex">
            {colores.map((color, index) => (
              <div key={index} className={`${color}`}></div>
            ))}
            </div>
          </div>
          <br></br>
          <div className="tamaño">
            <h2>Seleccione su tamaño</h2>
            <br></br>
            <div className="organizar">
              <button className="talla">M</button>
              <button className="talla">L</button>
              <button className="talla">X</button>
            </div>
          </div>

          <div className="guiatallas">
            <br></br>
            <h2>Guia de tallas</h2>

            <img className="guiaimg" src={talla} alt="" />
          </div>

          <div className="btns">
            <div className="bnts-com">
              <div className="compra">
                <button className="btncomprar">COMPRAR AHORA</button>
                <abbr title="Añadir a favoritos">
                  <img className="corazon" src={favorito} alt="" />
                </abbr>
              </div>
              <div className="cantidad">
                <p>Cantidad</p>
                <input type="text" pattern="^[0-9]+$" name="" id="" className="input-can" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
};
