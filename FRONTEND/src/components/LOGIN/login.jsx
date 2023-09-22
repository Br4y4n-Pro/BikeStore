import "../../assets/styles/login.css";
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png";
import back from "../../assets/Img/FondoLoginMovil/back.png";
import logo from "../../assets/Img/logo/font kelly slab.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/loginStore";
export const Login = () => {

const {login ,setData} = useAuthStore()

  const [user, setUser] = useState({
    correo_electronico: "",
    hash_contraseña: "",
  });

  const Navigate = useNavigate();

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
      setData(data.info)
      console.log(data);


      if (res.status === 401) {
        return alert("Contraseña Incorrecta")
      }
      if (res.status === 400) {
        return alert("Correo no registrado")
      }
    
      if (res.status === 200) {
        login()
        alert("ok");
        Navigate("/Home");

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

    </>
  );
};
