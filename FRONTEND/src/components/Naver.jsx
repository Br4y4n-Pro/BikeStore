import { useState } from 'react';
import '../components/Naver.css';
import logo from '../Page/logo 2.png';
import usua from '../Page/usuario.png';
import lupa from '../Page/lupa.png';
import carr from '../Page/carrito-de-compras (1).png';
import menu from '../Page/menu (2).png';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo de la empresa" className='log' />
      </div>

      <div className="containerlup">
        <input type='text' placeholder='Buscar' />
        <div className="btn">
          <img src={lupa} alt="Icono de lupa" className='lupa' />
        </div>
      </div>
      <img src={menu} alt="" className={`menu-btn ${menuActive ? 'active' : ''}`} onClick={toggleMenu} />
      <div className={`menu ${menuActive ? 'active' : ''}`}>
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
        <img src={usua} alt="Icono de usuario" className='user' />
        <img src={carr} alt="Icono de carrito" className='carrito' />
      </div>
    </nav>
    
    </>

  );
}

export default Navbar;