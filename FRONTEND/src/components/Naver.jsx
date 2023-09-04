import { useState } from "react";
import "../../src/assets/styles/Naver.css";
import logo from "../../src/assets/Img/nav/logo 2.png";
import usua from "../../src/assets/Img/nav/usuario.png";
import lupa from "../../src/assets/Img/nav/lupa.png";
import carr from "../../src/assets/Img/nav/carrito.png";
import menu from "../../src/assets/Img/nav/menu.png";
import closeMenu from "../../src/assets/Img/nav/cerrar.png";


export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [image, setImage] = useState(menu)

  const toggleMenu = () => {
    if (!menuActive) {
     setMenuActive(!menuActive);
    document.body.style.overflow = "hidden";
    setImage(image === menu ? closeMenu : menu)

    } else {
    setMenuActive(!menuActive);
    document.body.style.overflow = "auto";
    setImage(image === menu ? closeMenu : menu)

    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo de la empresa" className="log" />
        </div>

        <div className="containerlup">
          <input type="text" placeholder="Buscar" />
          <div className="btn">
            <img src={lupa} alt="Icono de lupa" className="lupa" />
          </div>
        </div>
        <img
          src={image}
          alt=""
          className={`menu-btn ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          
        />
        <div className={`menu ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">Bicicleta</a>
            </li>
            <li>
              <a href="#">Mantenimiento</a>
            </li>
            <li>
              <a href="#">Accesorios</a>
            </li>
            <li>
              <a href="#">Servicio al Cliente</a>
            </li>
          </ul>
        </div>

        <div className="search">
          <img src={usua} alt="Icono de usuario" className="user" />
          <img src={carr} alt="Icono de carrito" className="carrito" />
        </div>
      </nav>
    </>
  );
};


