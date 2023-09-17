import "../../assets/styles/perfil.css";
import { Card } from "../card";
import per from "../../assets/Img/formaPago/qr.png";
import { Navbar } from "../Naver";
import { useAuthStore } from "../../store/loginStore";
import { Navigate, useParams } from "react-router-dom";

export const Perfil = () => {
const {nombreLink} = useParams()

console.log(nombreLink)
  const { usuario } = useAuthStore();
  if (!usuario) return <Navigate to="/Home" />;
  console.log(usuario.nombre + usuario.apellido)
if ((usuario.nombre+usuario.apellido) != nombreLink) return <Navigate to="/Home" />;

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
        <h1 className="perfil">{nombreLink}</h1>
        <div className="cont1_cont2">
          <div className="Cont1">
            <img className="back_register" src={per} alt="" />
            <button>Editar</button>
          </div>

          <div className="Cont2">
            <p className="datos_personales">
              Nombre: <span>{nombre}</span>
            </p>

            <p className="datos_personales">
              Apellido: <span>{apellido}</span>
            </p>
            <p className="datos_personales">Fecha de Nacimiento:</p>
            <p className="datos_personales">
              Direccion: <span>{direccion}</span>
            </p>

            <p className="datos_personales">
              Documento de identidad: <span>{documento_identidad}</span>
            </p>

            <p className="datos_personales">
              Correo Electronico: <span>{correo_electronico}</span>
            </p>

            <p className="datos_personales">
              Numero de Telefono: <span>{numero_telefono}</span>
            </p>
          </div>
        </div>
        <div className="todo">
          <div className="favoritos">
            <p className="title_favoritos">FAVORITOS</p>
            <div className="cont_card_fav">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="Historial">
            <p className="title_historial">HISTORIAL DE COMPRAS</p>
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
