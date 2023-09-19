import "../assets/styles/admin.css";
import { Link } from "react-router-dom";
import logo from "../assets/Img/Logo/font kelly slab.png";
export const AdminZone = () => {
  return (
    <>
      <main className="container_admin">
        <aside className="aside_admin">
          <header className="aside_header">
            <img className="logo_admin" src={logo} alt="" />
          </header>

          <div className="zone_lists_aside">
            <div className="lists_items">
              <Link to="/Productos/Añadir" className="item">
                Agregar Productos
              </Link>
              <Link className="item">Estadisticas</Link>
              <Link className="item">Compras</Link>
              <Link className="item">Actualizar Productos</Link>
            </div>
            <div className="menu_aside">
              <Link className="item">Cerrar Sesion</Link>
              <Link className="item-home">Ir al Home</Link>
            </div>
          </div>
        </aside>

        <article className="graficos_admin">
          <div className="grafico_uno">grafico de ventas por dia</div>
          <div className="grafico_dos">algo mas</div>
          <div className="grafico_tres">nose</div>
        </article>

        <article className="zone_ventas">
          listado de ventas deberia de aparecer creo
        </article>
      </main>
    </>
  );
};
