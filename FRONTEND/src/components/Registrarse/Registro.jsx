import React from "react";
import "../../assets/styles/registro.css"
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png"
import back from "../../assets/Img/FondoLoginMovil/back.png"
import logo from "../../assets/Img/logo/font kelly slab.png"

export const Registro = () => {
  return (
    <>
      <div className="contenedor_register">
        <button className="btn-back"> 
        <img className="back_register" src={back} alt="" /> 
        </button>

        <div className="contenedor-small">
        <div className="zoneImagen">
          <img className="logo_movil" src={LogoMovil} alt="" />
          <div className="Bienvenida">
            <h3>Registrarse</h3>
            <p>Bienvenido</p>
          </div>
        </div>
        <div className="formulario">
        <img className="logo_pc" src={logo} alt="" />

          <form className="form-space" action="">
            <div className="form">
              <input placeholder="Nombre" className="input_register" id="nombre" type="text"/>
              <input placeholder="Apellido" className="input_register" id="apellido" type="text"/>
              <input placeholder="Correo Electronico" className="input_register" id="email" type="text" />
              <input placeholder="Confirmar Correo Electronico" className="input_register" id="R_email" type="text" />
              <input placeholder="Contraseña" className="input_register" id="password" type="password" />
              <input placeholder="Confirmar contraseña" className="input_register" id="R_password" type="password" />
              <input placeholder="Documento de Identidad" className="input_register" id="d_identidad" type="number" />
              <input placeholder="Numero de telefono" className="input_register" id="n_telefono" type="number"/>
              <input  placeholder="Direccion" className="input_register" id="direccion" type="text" />
              <button className="btn-register" type="submit">
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};
