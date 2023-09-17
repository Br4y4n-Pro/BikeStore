import { Card } from "./card";
import "../assets/styles/contenidoC.css";
import { Navbar } from "./Naver";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import mas from "../assets/Img/boton-mas.png";
import fond from "../assets/Img/fondd.png";
import { useAuthStore } from "../store/loginStore";

export const Contenido = () => {
  const { usuario } = useAuthStore();
  
  let userAdmin = false;

    if (usuario) {
      if (usuario.rol === 1)  userAdmin = true;
      console.log(userAdmin);
    }
  

  return (
    <>
      <Navbar />

      <div className="img_poster">
        <img className="fond" src={fond} alt="" />
      </div>
      {userAdmin ?(
        <main className="admin zone">
          <Link to="/Productos">
            <img src="" alt="" />
            <abbr title="Agregar Producto">
              <img className="mas" src={mas} alt="" />
            </abbr>
          </Link>
        </main>
      ):(
        <div></div>
      )
    }

      <div className="ContenidoCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};
