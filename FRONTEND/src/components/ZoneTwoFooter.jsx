import ameExpress from "../assets/Img/formaPago/ameExpress.png";
import bancolombia from "../assets/Img/formaPago/Logobancolombia.png";
import corresponsal from "../assets/Img/formaPago/corresponsal.png";
import mastercard from "../assets/Img/formaPago/mastercard.png";
import nequi from "../assets/Img/formaPago/nequi.png";
import pse from "../assets/Img/formaPago/pse.png";
import qr from "../assets/Img/formaPago/qr.png";
import visa from "../assets/Img/formaPago/visa.svg";


export const ZoneTwoFooter = () => {
  return (
  <>
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
  </>
  )
}
