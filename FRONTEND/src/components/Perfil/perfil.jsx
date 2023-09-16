import "../../assets/styles/perfil.css";
import { Card } from "../card";
import per from "../../assets/Img/formaPago/qr.png";
import { Navbar } from "../Naver";
import { useAuthStore } from "../../store/loginStore";

export const Perfil = () => {
  const { usuario } = useAuthStore();

  const {
    apellido,
    correo_electronico,
    direccion,
    documento_identidad,
    nombre,
    numero_telefono,
  } = usuario;

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
            {nombre}
            <p>APELLIDO:</p>
            {apellido}
            <p>NOMBRE DE USUARIO:</p>
            {nombre}
            <p>FECHA DE NACIMIENTO:</p>
            <p>UBICACION:</p>
            {direccion}
            <p>DOCUMENTO DE IDENTIDAD:</p>
            {documento_identidad}
            <p>CORREO ELECTRONICO:</p>
            {correo_electronico}
            <p>Numero de Telefono:</p>
            {numero_telefono}
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
