import "../../assets/styles/detalles.css";
import {Navbar} from "../Naver";
import { Footer } from "../footer";
import cicla from "../../assets/Img/cicla.png";
import talla from "../../assets/Img/colores detalles/gobernante.png";
import favorito from "../../assets/Img/colores detalles/corazon.png";

export const Detalles = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="todo">
        <div className="container1">
          <div className="precio_titulo">
            <h1 className="titulo">Bicicleta ONE O ONE 121</h1>
            <br></br>
            <h2 className="precio">$5.900.000 </h2>
            <br></br>
          </div>
          <img className="cicla" src={cicla} alt="" />

          <div className="descripcion">
            <h2>Descripcion</h2>
            <ul>
              <li>
                Solar tiene una geometría balanceada entre beneficios de
                comodidad y control en todos los terrenos.
              </li>
              <li>
                El marco está fabricado con fibra de carbono UR-HM de alta
                resistencia, con esto se logra una bicicleta muy liviana y
                altamente resistente.
              </li>
              <li>
                La transmisión de cambios es fabricada por Sram uno de los
                líderes mundiales de componentes. Su modelo SX Eagle con un solo
                plato (34 dientes) y 12 piñones (11-50) te brinda la mayor
                suavidad y precisión cuando realizas cambios.
              </li>
              <li>
                Las llantas son el punto de contacto con todos los terrenos y
                las encargadas de darte control y suavidad, con llantas de 29” y
                ancho de 2.1” la Solar te da eso y además mucha confianza.
              </li>
              <li>
                Los frenos hidráulicos te darán tranquilidad para detenerte
                rápidamente en cualquier condición: seco o mojado.
              </li>
            </ul>
          </div>
          <br></br>
        </div>

        <div className="container2">
          <br></br>
          <br></br>
          <br></br>

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
              <div className="color1"> </div>
              <div className="color2"></div>
              <div className="color3"></div>
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
                <h3>cantidad</h3>
                <input type="number" name="" id="" className="input-can" />
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
