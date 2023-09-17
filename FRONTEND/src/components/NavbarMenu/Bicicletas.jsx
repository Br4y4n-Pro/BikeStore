import "../../assets/styles/bicicleta.css";
import { Navbar } from "../Naver";
import { Footer } from "../footer";
import bmc from "../../assets/Img/marcas/BMC.jpg";
import canyon from "../../assets/Img/marcas/canyon.jpg";
import colnago from "../../assets/Img/marcas/Colnago.jpg";
import felt from "../../assets/Img/marcas/Felt.jpg";
import focus from "../../assets/Img/marcas/Focus.jpg";
import giant from "../../assets/Img/marcas/giant.jpg";
import gw from "../../assets/Img/marcas/GW.jpg";
import kona from "../../assets/Img/marcas/kona_.jpg";
import orbea from "../../assets/Img/marcas/Orbea.jpg";
import pinarello from "../../assets/Img/marcas/Pinarello.jpg";
import rocky from "../../assets/Img/marcas/Rocky Mountain.jpg";
import scott from "../../assets/Img/marcas/scott.jpg";
import specialized from "../../assets/Img/marcas/Specialized.jpg";
import trek from "../../assets/Img/marcas/trek.jpg";
import wilier from "../../assets/Img/marcas/Wilier.jpeg";
import yeti from "../../assets/Img/marcas/Yeti.jpg";

export const Bicicletas = () => {
  return (
    <>
      <Navbar />
      <h1 className="titulo">BICICLETAS</h1>
      <div className="todos">
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={bmc}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>BMC</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={canyon}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>CANYON</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={colnago}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>COLNAGO</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={felt}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>FELT</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={focus}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>FOCUS</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={giant}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>GIANT</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={gw}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>GW</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={kona}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>KONA</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={orbea}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>ORBEA</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={pinarello}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>PINARELLO</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={rocky}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>ROCKY MOUNTAIN</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={scott}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>SCOTT</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={specialized}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>SPECIALIZED</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={trek}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>TREK</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={wilier}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>WILIER TRIESTINA</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="espacio-imagen">
            <img
              className="principal-image"
              src={yeti}
              alt="image equilibrium"
            ></img>
            <div className="capa">
              <h1>YETI</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
