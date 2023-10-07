import "../assets/styles/footer.css";
// logo
import logo from "../assets/Img/Logo/logo.png";
// Redes
import facebook from "../assets/Img/redes/facebook.png";
import instagram from "../assets/Img/redes/instagram.png";
import twitter from "../assets/Img/redes/twitter.png";
import whatsapp from "../assets/Img/redes/whatsapp.png";
import { ZoneTwoFooter } from "./ZoneTwoFooter";
import { Link } from "react-router-dom";
//formas de pago

export const Footer = () => {
  return (
    <>
      <footer>
        <hr />
        <section className="footer">
          <article className="zona1">
            <h3>LINKS DE INTERES</h3>
            <a href="#">Quiénes somos</a>
            <a href="#">Guia de Tallas</a>
            <a href="#">Contactanos</a>
            <Link to="/politicasYtratamientodatos">Politica y tratamiento de los datos</Link>
            <Link to="/terminos">Términos y condiciones</Link>
            <div className="notificaciones">
              <p>Recibe notificaciones de ofertas</p>
              <form>
                <input
                  name="correo"
                  placeholder="Dejanos tu Correo"
                  type="email"
                />
                <button className="footer-btn-correo">UNIRME</button>
              </form>
            </div>
          </article>

          <ZoneTwoFooter/>

          <article className="zona3">
            <h4>¿Quieres ser Distribuidor?</h4>
            <a href="#">Contacta con nosotros</a>

            <h4>Nuestras Redes Sociales</h4>
            <div className="redesSociales">
              <figure>
                <a href="">
                  <img src={facebook} alt="Facebook" className="redes" />
                </a>
              </figure>
              <figure>
                <a href="">
                  <img src={instagram} alt="Instagram" className="redes" />
                </a>
              </figure>
              <figure>
                <a href="">
                  <img src={twitter} alt="Twitter" className="redes" />
                </a>
              </figure>
              <figure>
                <a href="">
                  <img src={whatsapp} alt="WhatsApp" className="redes" />
                </a>
              </figure>
            </div>
            <div className="logo">
              <a href="#">
                <img src={logo} alt="Logo Bike Store" />
              </a>
            </div>
          </article>
          <article className="copyright">
            <p>
              © Derechos de Autor 2023 ADSO-BIKE, Todos los derechos reservados.
            </p>
          </article>
        </section>
      </footer>
    </>
  );
};
