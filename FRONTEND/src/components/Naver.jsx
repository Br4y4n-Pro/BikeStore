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
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const Navigate = useNavigate();
  //estado global
  const { logout, isLoggedIn, usuario, setData } = useAuthStore();

  const cerrarSesion = () => {
    logout();
    setData(null);
    Navigate("/Home");
  };

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
            <div   className={`user ${isActive ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                   <div className="user_imagen">
             {
                <p>
                  
                  {(usuario.nombre + " " + usuario.apellido).toUpperCase()}
                </p>
              }
               <img src={usua} alt="Icono de usuario" />
             </div>
              <div
               className={`elemento ${isActive ? "active" : ""}`}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
              <div className="lista_perfil">
              <Link to={`/perfil/${(usuario.nombre + usuario.apellido).toLowerCase()}`}>
      <p>Perfil</p>
    </Link>
              <p>Lista de Favorito</p>
              <p onClick={cerrarSesion}>Cerrar Sesion</p>
              </div>
              </div>

            </div>
          ) : (
            <Link to="/Login" className="user">
              <p>Iniciar Sesion</p>
              <img src={usua} alt="Icono de usuario" />
            </Link>
          )}

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

//EFECTO HOVER SOSTENIDO EN REACT :)
