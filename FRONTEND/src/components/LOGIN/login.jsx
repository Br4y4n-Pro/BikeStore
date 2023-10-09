import "./modal.css"
import "../../assets/styles/login.css";
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png";
import back from "../../assets/Img/FondoLoginMovil/back.png";
import logo from "../../assets/Img/logo/font kelly slab.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/loginStore";
export const Login = () => {
  const { login, setData } = useAuthStore();
  const [showPopup, setShowPopup] = useState(false);
  const [ numberStatus, setNumberStatus] = useState(0)

  const Navigate = useNavigate()

  const mensaje = (value) => {
    console.log(value)
    if (value === 1) {
      return `No se ingreso ningun dato`
    }
 
    if (value === 401) {
      return 'El correo o la contraseña es incorrecta';
    }
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const [user, setUser] = useState({
    correo_electronico: "",
    hash_contraseña: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const ingresarUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3050/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      setData(data.info);
      console.log(data);
      
      if (res.status === 400) {
        setShowPopup(true);
        setNumberStatus(400)
      }
      if (res.status === 401) {
        setShowPopup(true);
        setNumberStatus(401)
      }

      if (res.status === 200) {
        login();
        alert("Inicio de Sesion Exitoso")
        Navigate("/Home")
      } else {
        console.log(data.error, "no se pudo iniciar ");
        // Inicio de sesión fallido, maneja el mensaje de error
      }
    } catch (error) {
      console.error(error);
      // Maneja errores de conexión u otros errores
    }

    // hacer loader luego ya casi...
    console.log("envio los datos ", user);
  };
  console.log(showPopup)

 
  
  // console.log(mensaje(401))

  return (
    <>
      <div className="contenedor_login">
        <button className="btn-back">
          <Link to="/Home">
            <img className="back_login" src={back} alt="" />
          </Link>
        </button>
        <div className="contenedor-small">
          <div className="zoneImagen">
            <img src={LogoMovil} alt="" />
            <div className="Bienvenida">
              <h3>Iniciar Sesion</h3>
              <p>Bienvenido</p>
            </div>
          </div>
          <div className="formulario">
            <img className="logo_movil" src={logo} alt="" />

            <form className="form-space" onSubmit={ingresarUser}>
              <div className="form">
                <input
                  placeholder="Correo Electronico"
                  className="input_login"
                  id="user"
                  name="correo_electronico"
                  onChange={handleChange}
                  type="text"
                />

                <input
                  placeholder="Contraseña"
                  className="input_login"
                  id="password"
                  name="hash_contraseña"
                  onChange={handleChange}
                  type="password"
                />
                <Link className="passRecu" to="/Restore">
                  ¿Olvidaste tu contraseña?
                </Link>
                <button className="btn-login" type="submit">
                  Iniciar Sesion
                </button>
                <Link to="/Registro" className="registrarse">
                  ¿No tienes una Cuentas?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
{showPopup ?(
     <div className="modal_login_layout">
       <div className={`modal_login ${showPopup ? 'visible': 'hidden'}`}>
        {mensaje(numberStatus)}


        <button className="modal_login_button" onClick={handleClosePopup}> Cerrar </button>
      </div>
     </div>
      ): null}
    </>
  );
};


