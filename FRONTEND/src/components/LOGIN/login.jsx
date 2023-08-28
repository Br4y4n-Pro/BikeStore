import React from "react";
import "../../assets/styles/login.css";
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png";
import back from "../../assets/Img/FondoLoginMovil/back.png";
import logo from "../../assets/Img/logo/font kelly slab.png";
import { useState, useEffect } from "react";
import {ModalNice} from "./modalNice";

export const Login = () => {
  const [user, setUser] = useState({
    correo_electronico: "",
    hash_contraseña: "",
  });

  const [ingreso, setIngreso] = useState(false);

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

      console.log(data);
      if (res.status === 200) {
        setIngreso(true)
      } else {
        console.log("no se pudo iniciar ");
        // Inicio de sesión fallido, maneja el mensaje de error
      }
    } catch (error) {
      console.error(error);
      // Maneja errores de conexión u otros errores
    }

    // hacer loader luego ya casi...
    console.log("envio los datos ", user);
  };
  const cerrarModal = () => {
    setIngreso(false);
  };
  return (
    <>
      <div className="contenedor_login">
        <button className="btn-back">
          {" "}
          <img className="back_login" src={back} alt="" />{" "}
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
                <a className="passRecu" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
                <button className="btn-login" type="submit">
                  Iniciar Sesion
                </button>
                <a className="registrarse">¿No tienes una Cuentas?</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {ingreso && (
        <ModalNice  cerrarModal={cerrarModal}/>
      )}
    </>
  );
};
