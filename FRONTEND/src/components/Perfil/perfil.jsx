import "../../assets/styles/perfil.css";
import per from "../../assets/Img/formaPago/qr.png";
import { Navbar } from "../Naver";
import { useAuthStore } from "../../store/loginStore";
import { Navigate, useParams } from "react-router-dom";

export const Perfil = () => {
const {nombreLink} = useParams()

  const { usuario } = useAuthStore();
  if (!usuario) return <Navigate to="/Home"/>;
  const nombreUser=usuario.nombre + usuario.apellido
if (((nombreUser.toLowerCase())) != nombreLink) return <Navigate to={`/perfil/${usuario.nombre+usuario.apellido}`} />;

  const {
    apellido,
    correo_electronico,
    direccion,
    documento_identidad,
    nombre,
    numero_telefono,
  } = usuario;


  const mensaje =()=>{
    alert(`proximamente, ${nombre.toUpperCase()}  ☆*: .｡. o(≧▽≦)o .｡.:*☆`)
  }

  return (
    <>
      <Navbar />
      <div className="container-perfil">
         <div className="cont1_cont2">
          <div className="Cont1">
            <img className="back_register" src={per} alt="" />
            <button onClick={mensaje}>Editar</button>
          </div>

          <div className="Cont2">
            <p className="datos_personales">
              Nombre: <span>{nombre.toUpperCase()}</span>
            </p>

            <p className="datos_personales">
              Apellido: <span>{apellido.toUpperCase()}</span>
            </p>
            <p className="datos_personales">Fecha de Nacimiento:</p>
            <p className="datos_personales">
              Direccion: <span>{direccion.toUpperCase()}</span>
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
                
            </div>
          </div>
          <div className="Historial">
            <p className="title_historial">HISTORIAL DE COMPRAS</p>
            <div className="cont_card_his">
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
