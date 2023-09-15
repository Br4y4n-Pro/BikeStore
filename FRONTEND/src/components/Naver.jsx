import { useState } from "react";
import "../../src/assets/styles/Naver.css";
import logo from "../../src/assets/Img/nav/logo 2.png";
import usua from "../../src/assets/Img/nav/usuario.png";
import lupa from "../../src/assets/Img/nav/lupa.png";
import carr from "../../src/assets/Img/nav/carrito.png";
import menu from "../../src/assets/Img/nav/menu.png";
import closeMenu from "../../src/assets/Img/nav/cerrar.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/loginStore";

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [image, setImage] = useState(menu);
  const [optionPerfil,setPerfilOption]=useState(false)

  const Navigate = useNavigate();
  //estado global
  const {logout , isLoggedIn} = useAuthStore()

  const cerrarSesion =()=>{
    logout()
    Navigate("/Home");
  }

  
  const toggleMenu = () => {
    if (!menuActive) {
      setMenuActive(!menuActive);
      document.body.style.overflow = "hidden";
      setImage(image === menu ? closeMenu : menu);
    } else {
      setMenuActive(!menuActive);
      document.body.style.overflow = "auto";
      setImage(image === menu ? closeMenu : menu);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/Home">
            <img src={logo} alt="Logo de la empresa" className="log" />
          </Link>
        </div>

        <div className="containerlup">
          <input type="text" placeholder="Buscar" />
          <div className="btn-lupa">
            <img src={lupa} alt="Icono de lupa" className="lupa" />
          </div>
        </div>

        <div className={`menu ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/Bicicletas">Bicicleta</Link>
            </li>
            <li>
              <Link to="/Mantenimiento">Mantenimiento</Link>
            </li>
            <li>
              <Link to="/Accesorios">Accesorios</Link>
            </li>
            <li>
              <Link to="/Servicio-Cliente">Servicio al Cliente</Link>
            </li>
          </ul>
        </div>

        <div className="search">
            
             {isLoggedIn ? ( 
                <Link to="/Home" className="user">
                <p>Brayan Cañas</p>
                <button onClick={cerrarSesion}>Cerrar Sesion</button>

                <img src={usua} alt="Icono de usuario" />
              </Link>
             ): (  
             <Link to="/Login" className="user">
             <p>Iniciar Sesion</p>
             <img src={usua} alt="Icono de usuario" />
           </Link>)
           }
        
          <img src={carr} alt="Icono de carrito" className="carrito" />
          <img
            src={image}
            alt=""
            className={`menu-btn ${menuActive ? "active" : ""}`}
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </>
  );
};
