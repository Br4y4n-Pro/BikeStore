import "../../assets/styles/perfil.css";
import { Card } from "../card";
import per from "../../assets/Img/formaPago/qr.png";
import Navbar from "../Naver";
export const Perfil = () => {
  return (
    <>
      <Navbar />
      <div className="container-perfil">
        <h1 className="perfil">PERFIL</h1>
        <div className="cont1_cont2">
          <div className="Cont1">
            <img className="back_register" src={per} alt="" />
            <button>Editar</button>
          </div>

          <div className="Cont2">
            <p>NOMBRE:</p>
            <p>NOMBRE DE USUARIO:</p>
            <p>FECHA DE NACIMIENTO:</p>
            <p>UBICACION:</p>
            <p>EDAD:</p>
            <p>SEXO:</p>
          </div>
        </div>
        <div className="todo">
          <div className="favoritos">
            <p>FAVORITOS</p>
            <div className="cont_card_fav">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="Historial">
            <p>HISTORIAL DE COMPRAS</p>
            <div className="cont_card_his">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
