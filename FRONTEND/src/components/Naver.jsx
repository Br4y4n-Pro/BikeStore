import { useState, useEffect } from "react";
import "../../src/assets/styles/Naver.css";
import logoMovil from "../../src/assets/Img/Logo/LogoLWhitepeque.png";
import logoPc from "../../src/assets/Img/Logo/font kelly slab.png"
import usua from "../../src/assets/Img/nav/usuario.png";
import lupa from "../../src/assets/Img/nav/lupa.png";
import carr from "../../src/assets/Img/nav/carrito.png";
import menu from "../../src/assets/Img/nav/menu.png";
import closeMenu from "../../src/assets/Img/nav/cerrar.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/loginStore";

export const Navbar = () => {
  //estados
  const [menuActive, setMenuActive] = useState(false);
  const [image, setImage] = useState(menu);
  const [logo, setLogo] = useState(logoPc)
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState([]);
  const [text, setText] = useState("");
  const [buscando, setBuscando] = useState(false);
  //estados globales
  const { logout, isLoggedIn, usuario, setData } = useAuthStore();


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setLogo(logoMovil);
      } else {
        setLogo(logoPc);
      }
    };

        // Agregar un evento de cambio de tamaño de ventana para verificar el ancho de la pantalla
        window.addEventListener('resize', handleResize);

        // Llamar a handleResize una vez cuando se carga el componente
        handleResize();
    
        // Eliminar el evento cuando el componente se desmonta
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const Navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    setData(null);
    Navigate("/Home");
  };

  const toggleMenu = () => {

    if (window.innerWidth <= 820) {
    if (!menuActive) {
      setMenuActive(!menuActive);
      document.body.style.overflow = "hidden";
      setImage(image === menu ? closeMenu : menu);
    } else {
      setMenuActive(!menuActive);
      document.body.style.overflow = "auto";
      setImage(image === menu ? closeMenu : menu);
    }
  }
  
  };

  //BUSCADOR

  const handleChange = async (event) => {
    setText(  event.target.value );
    if (text !== "" && text !== " ") {
      const urlBusqueda = `http://localhost:3050/buscar?q=${text}`;
      console.log(urlBusqueda);
      const response = await fetch(urlBusqueda);
      const data = await response.json();
      setQuery(data);
      setBuscando(true);
    } else {
      setBuscando(false);
      
    }
  };

  const handleBlur = () => {
    // Cuando el input pierde el foco, borra su valor
    setBuscando(false)
    setText("")

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
          <input onChange={handleChange}
 onBlur={handleBlur} type="text" placeholder="Buscar" />
          <div className="btn-lupa">
            <img src={lupa} alt="Icono de lupa" className="lupa" />
          </div>
          <div
            className={`busquedas ${
              buscando || query.length > 0 ? "active" : ""
            } `}
          >
            {!buscando || text === "" || text === " " ? (
              <div></div>
            ) : (
              query.map((item) => (
                <div className="item" key={item.id_producto}>
                  <Link
                    className="link_item"
                    to={`/Detalles/${item.id_producto}`}
                  >
                    <div className="imagen_item">
                      <img
                        src={`http://localhost:3050${item.img_producto}`}
                        alt={item.nombre_producto}
                      />
                    </div>
                    <div className="title_item">{item.nombre_producto}</div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={`menu ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link onClick={toggleMenu} to="/Bicicletas">
                Bicicleta
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/Mantenimiento">
                Mantenimiento
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/Accesorios">
                Accesorios
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/Servicio-Cliente">
                Servicio al Cliente
              </Link>
            </li>
          </ul>
        </div>

        <div className="search">
          {isLoggedIn ? (
            <div
              className={`user ${isActive ? "active" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
                onMouseLeave={handleMouseLeave}
              >
                <div className="lista_perfil">
                  <Link
                    to={`/perfil/${(
                      usuario.nombre + usuario.apellido
                    ).toLowerCase()}`}
                  >
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
