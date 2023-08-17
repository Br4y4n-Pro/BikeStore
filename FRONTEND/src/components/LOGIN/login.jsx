import React from "react";
import "../../assets/styles/login.css";
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png"
import back from "../../assets/Img/FondoLoginMovil/back.png"
import logo from "../../assets/Img/logo/font kelly slab.png"

export const Login = () => {
  return (
    <>
      <div className="contenedor_login">
        <button className="btn-back"> <img className="back_login" src={back} alt="" /> </button>
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

          <form className="form-space" action="">
            <div className="form">
              <input placeholder="Correo Electronico" className="input_login" id="user" type="text" />

              <input placeholder="Contraseña" className="input_login" id="password" type="password" />
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
  </>
  );
};
