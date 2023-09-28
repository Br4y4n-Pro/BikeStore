import { Card } from "./card";
import "../assets/styles/contenidoC.css";
import { Navbar } from "./Naver";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import mas from "../assets/Img/boton-mas.png";
import { useAuthStore } from "../store/loginStore";
import { useGlobalStore } from "../store/productoFetchStore";
import { useEffect } from "react";
import { Carousele } from "./carousel";

export const Contenido = () => {
  const { data, loading, error, fetchData } = useGlobalStore();

  useEffect(() => {
    fetchData(); // Llama a la función para realizar la solicitud fetch al montar el componente
  }, [fetchData]);

  const { usuario } = useAuthStore();

  let userAdmin = false;

  if (usuario) {
    if (usuario.rol === 1) userAdmin = true;
    // console.log(userAdmin);
  }

  if (loading) {
    return (
      <div className="loader">
        <div className="wheel"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    // Renderiza los datos recibidos

    // console.log(data)

    return (
      <>
        <Navbar />
        <Carousele/>
        { userAdmin ? (
          <main className="admin zone">
            <Link to="/Productos">
              <img src="" alt="" />
              <abbr title="Agregar Producto">
                <img className="mas" src={mas} alt="" />
              </abbr>
            </Link>
          </main>
        ) : (
          <div></div>
        )}

        <div className="ContenidoCard">
          {data.map((producto) => (
            <Card key={producto.id_producto} {...producto} />
          ))}
        </div>
        <Footer />
      </>
    );
  }

  return null;
};
