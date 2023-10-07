import { Navbar } from "../Naver";
import { Footer } from "../footer";
import "../../assets/styles/terminos.css"
function TerminosYCondiciones() {
  return (
    <>
    <Navbar/>
    <div className="container_terminos">
      <h2>Términos y Condiciones de BikeStore</h2>
      <p>Última Actualización: 5 / Mayo / 2023</p>

      <h3>1. Registro y Cuenta de Usuario</h3>
      <ul>
        <li>Debes ser mayor de 18 años para registrarte y realizar compras en BikeStore.</li>
        <li>Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y contraseña.</li>
        <li>Toda la información proporcionada durante el proceso de registro debe ser precisa y completa.</li>
        <li>Te comprometes a notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta.</li>
      </ul>

      <h3>2. Pedidos y Compras</h3>
      <ul>
        <li>Al realizar un pedido, aceptas pagar el monto total especificado, incluidos los impuestos y los gastos de envío.</li>
        <li>Nos reservamos el derecho de rechazar o cancelar pedidos por cualquier motivo, incluyendo la disponibilidad de productos y errores en la información del producto.</li>
        <li>Te proporcionaremos confirmación del pedido por correo electrónico una vez que hayamos recibido tu pedido.</li>
        <li>Los precios y la disponibilidad de productos están sujetos a cambios sin previo aviso.</li>
      </ul>

      <h3>3. Envíos y Devoluciones</h3>
      <p>Consulta nuestra política de envíos y devoluciones para obtener información detallada sobre los plazos de envío, costos y procedimientos de devolución.</p>

      <h3>4. Privacidad</h3>
      <p>Respetamos tu privacidad y protegemos tus datos personales de acuerdo con nuestra Política de Privacidad. Al utilizar nuestro sitio web, aceptas nuestras prácticas de privacidad.</p>

      <h3>5. Propiedad Intelectual</h3>
      <p>Todo el contenido de nuestro sitio web, incluyendo texto, imágenes, logotipos y gráficos, está protegido por derechos de autor y otras leyes de propiedad intelectual. No puedes utilizar ningún contenido de BikeStore sin nuestro permiso por escrito.</p>

      <h3>6. Limitación de Responsabilidad</h3>
      <p>BikeStore no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso de nuestros productos o servicios.</p>

      <h3>7. Ley Aplicable</h3>
      <p>Estos términos y condiciones se rigen por las leyes del Colombia y cualquier disputa relacionada con ellos estará sujeta a la jurisdicción exclusiva de los tribunales de Palmira / Valle del Cauca.</p>

      <h3>8. Cambios en los Términos y Condiciones</h3>
      <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en nuestro sitio web.</p>

      <h3>9. Contacto</h3>
      <p>Si tienes alguna pregunta o inquietud sobre estos términos y condiciones, contáctanos en BikeStoreServices@gmail.com o 3243242434.</p>

      <p>Gracias por elegir BikeStore. Esperamos que disfrutes de tus compras en nuestra tienda en línea.</p>
    </div>
    <Footer/>
    </>
  );
}

export default TerminosYCondiciones;
