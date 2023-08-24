
import "../../assets/styles/registro.css"
import LogoMovil from "../../assets/Img/Logo/LogoLWhite.png"
import back from "../../assets/Img/FondoLoginMovil/back.png"
import logo from "../../assets/Img/logo/font kelly slab.png"

export const Registro = () => {
  return (
    <>
      <div className="contenedor_register">
        <button className="btn-back"> 
        <img className="back_login" src={back} alt="" /> 
        </button>

        <div className="contenedor-small">
        <div className="zoneImagen">
          <img src={LogoMovil} alt="" />
          <div className="Bienvenida">
            <h3>Registrarse</h3>
            <p>Bienvenido</p>
          </div>
        </div>
        <div className="formulario">
        <img className="logo_movil" src={logo} alt="" />

          <form className="form-space" action="">
            <div className="form">
              <input placeholder="Nombre" className="input_login" id="nombre" type="text"/>
              <input placeholder="Apellido" className="input_login" id="apellido" type="text"/>
              <input placeholder="Correo Electronico" className="input_login" id="email" type="text" />
              <input placeholder="Confirmar Correo Electronico" className="input_login" id="R_email" type="text" />
              <input placeholder="Numero de telefono" className="input_login" id="n_telefono" type="number"/>
              <input placeholder="Contraseña" className="input_login" id="password" type="password" />
              <input placeholder="Confirmar contraseña" className="input_login" id="R_password" type="password" />
              <input placeholder="Documento de Identidad" className="input_login" id="d_identidad" type="number" />
              <input  placeholder="Direccion" className="input_login" id="direccion" type="text" />
              <button className="btn-login" type="submit">
                Registrar
              </button>
              <a className="registrarse">Iniciar Sesion</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};
