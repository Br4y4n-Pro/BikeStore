import "../assets/styles/footer.css";
// logo
import logo from "../assets/Img/Logo/logo.png";
// Redes
import facebook from "../assets/Img/redes/facebook.png";
import instagram from "../assets/Img/redes/instagram.png";
import twitter from "../assets/Img/redes/twitter.png";
import whatsapp from "../assets/Img/redes/whatsapp.png";
//formas de pago
import ameExpress from "../assets/Img/formaPago/ameExpress.png";
import bancolombia from "../assets/Img/formaPago/Logobancolombia.png";
import corresponsal from "../assets/Img/formaPago/corresponsal.png";
import mastercard from "../assets/Img/formaPago/mastercard.png";
import nequi from "../assets/Img/formaPago/nequi.png";
import pse from "../assets/Img/formaPago/pse.png";
import qr from "../assets/Img/formaPago/qr.png";
import visa from "../assets/Img/formaPago/visa.svg";

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
            <a href="#">Politica y tratamiento de los datos</a>
            <a href="#">Términos y condiciones</a>
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

          <article className="zona2">
            <h3>FORMAS DE PAGO</h3>
            <div className="linea">
              <figure className="imagen">
                <a href="">
                  <img
                    src={bancolombia}
                    alt="Logo Bancolombia"
                    className="formasPago"
                  />
                </a>
                <p>Bancolombia</p>
              </figure>

              <figure className="imagen">
                <a href="">
                  <img src={qr} alt="Logo QR" className="formasPago" />
                </a>
                <p>Codigo QR</p>
              </figure>
              <figure className="imagen">
                <a href="">
                  <img
                    src={corresponsal}
                    alt="Logo Corresponsal"
                    className="formasPago"
                  />
                </a>
                <p>Corresponsal</p>
              </figure>
            </div>

            <div className="linea">
              <figure className="imagen">
                <a href="">
                  <img src={nequi} alt="Logo Nequi" className="formasPago" />
                </a>
              </figure>
              <figure className="imagen">
                <a href="">
                  <img src={pse} alt="Logo Pse" className="formasPago" />
                </a>
              </figure>
            </div>
            <div className="linea">
              <figure className="imagen">
                <a href="">
                  <img
                    src={mastercard}
                    alt="Logo MasterCard"
                    className="formasPago"
                  />
                </a>
              </figure>
              <figure className="imagen">
                <a href="">
                  <img src={visa} alt="Logo Visa" className="formasPago" />
                </a>
              </figure>
              <figure className="imagen">
                <a href="">
                  <img
                    src={ameExpress}
                    alt="Logo America Express"
                    className="formasPago"
                  />
                </a>
              </figure>
            </div>
          </article>

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
