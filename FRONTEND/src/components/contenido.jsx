import { Card } from "./card";
import "../assets/styles/contenidoC.css";
import { Navbar } from "./Naver";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import mas from "../assets/Img/boton-mas.png";
import fond from "../assets/Img/fondd.png";
import { useAuthStore } from "../store/loginStore";
import { useGlobalStore } from "../store/productoFetchStore";
import { useEffect } from "react";

export const Contenido = () => {
  const { fetchData } = useGlobalStore();

  useEffect(() => {
    fetchData(); // Llama a la función para realizar la solicitud fetch al montar el componente
  }, [fetchData]);

  const { usuario } = useAuthStore();

  let userAdmin = false;

  if (usuario) {
    if (usuario.rol === 1) userAdmin = true;
    console.log(userAdmin);
  }

  const { data } = useGlobalStore();
  console.log(data);
  return (
    <>
      <Navbar />

      <div className="img_poster">
        <img className="fond" src={fond} alt="" />
      </div>
      {userAdmin ? (
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
          <Card key={producto.id} {...producto} />
        ))}
      </div>
      <Footer />
    </>
  );
};
