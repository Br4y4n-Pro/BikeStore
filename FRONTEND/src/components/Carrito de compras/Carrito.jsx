import "../../assets/styles/Carrito.css";
import { Navbar } from "../Naver";
import { Footer } from "../footer";
import { useGlobalStore } from "../../store/productoFetchStore";
import { useState } from "react";
import { useAuthStore } from "../../store/loginStore";
import { Link, useNavigate } from "react-router-dom";
import correcto from "../../assets/Img/checked.png";
import incorrecto from "../../assets/Img/error.gif";
import qr from "../../assets/Img/formaPago/qr.png";

export const Carrito = () => {
  const {
    carrito,
    contador,
    totalprecio,
    agregarProducto,
    eliminarProducto,
    incrementar,
    eliminar,
    resetCart,
  } = useGlobalStore();

  const { isLoggedIn, usuario } = useAuthStore();
  const [mensaje, setMensaje] = useState(null);
  const [venta, setVenta] = useState(false);
  const [pago, setPago] = useState("Efectivo");
  const [modal, setModal] = useState(false);
  const Navigate = useNavigate();
  const handleChangeEliminar = (productoId) => {
    // console.log(productoId);
    eliminarProducto(productoId);
    eliminar();
  };

  const formapago = (e) => {
    const formaPago = e.target.value;
    setPago(formaPago);
  };
  const handleChangeAñadir = (productoId) => {
    // console.log(productoId);
    agregarProducto(productoId);
    incrementar();
  };

  // console.log(totalprecio);

  const actMensaje = (e) => {
    const mensaje = e.target.value;
    setMensaje(mensaje);
  };
  //fetch y envio de formulario

  // console.log(carrito)
  // console.log(usuario)
  // console.log(isLoggedIn)

  const controladorEnvio = () => {
    resetCart();
    setMensaje("");
    setPago("Efectivo");
    setVenta(true);
    setModal(true);
  };

  const enviodeproductos = async () => {
    // en la venta necesito enviar esto
    // id_producto, id_cliente, estado_v, cantidad,costo_initario,costo,forma_pago
    if (!isLoggedIn) {
      return Navigate("/Login"), alert("No haz iniciado sesión");
    }
    console.log(carrito);
    if (carrito.length === 0) {
      return alert("No hay productos en el carrito");
    }
    const newCart = {
      productos: carrito, // carrito es un array de productos
      data: {
        id_cliente: usuario.id_usuario,
        costoTotal: totalprecio,
        forma_pago: pago,
        estado_v: mensaje,
      },
    };
    console.log("se envio");
    const result = await fetch("http://localhost:3050/ventas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    });

    if(!result.ok){
      return   setModal(true),setVenta(false);
    }
    const data = await result.json();
    if (result.status === 201) {
      controladorEnvio(data);
    }
    if (result.status === 401) {
      setModal(true);
      setVenta(false);
    }
  };
  // console.log(carrito);

  // const manejadorBotones = () => {};

  return (
    <>
      <Navbar />
      <div className="contenedor_carrito">
        <h2 className="titulo">Carrito De Compras</h2>

        <header className="header">
          <p className="producto">Producto</p>
          <p className="">Cantidad</p>
          <p className="">Total</p>
        </header>
        <main className="list_product">
          {contador >= 1 ? (
            carrito.map((producto) => (
              <div key={producto.id_producto} className="Item">
                <article className="producto">
                  <img
                    className="img_cicla"
                    src={`http://localhost:3050${producto.img_producto}`}
                    alt={producto.nombre_producto}
                  />

                  <div className="precioNombre">
                    <p className="nombre">{producto.nombre_producto}</p>
                    <p className="precio">
                      {" "}
                      $ {producto.precio.toLocaleString()}
                    </p>
                  </div>
                </article>
                <article className="cantidadCar">
                  <button
                    onClick={() => {
                      handleChangeEliminar(producto.id_producto);
                    }}
                    className="min"
                  >
                    {producto.cantidad === 1 ? <p>Eliminar</p> : <p>-</p>}
                  </button>
                  <div className="cantidadtext">{producto.cantidad}</div>
                  <button
                    onClick={() => {
                      handleChangeAñadir(producto.id_producto);
                    }}
                    className="max"
                  >
                    +
                  </button>
                </article>
                <article className="precioSum">
                  <p>$ {producto.costo.toLocaleString()}</p>
                </article>
              </div>
            ))
          ) : (
            <div className="notProduct">
              <p>NO SE HA AGREGADO NINGUN PRODUCTO</p>
            </div>
          )}
        </main>
        {contador >= 1 && (
          <>
            <div className="cont_btn_reset_cart">
              <button className="btn_reset" onClick={resetCart}>
                Vaciar Carrito
              </button>
            </div>
            <div className="Cont_Forma_pago">
              <p className="Forma_pago_Titulo">Forma de pago</p>
              <select
                className="opciones_pago"
                onChange={formapago}
                name="formasPago"
              >
                <option value="Efectivo">Efectivo</option>
                <option value="Bancolombia">Bancolombia</option>
                <option value="Codigo Qr">Codigo Qr</option>
                <option value="Corresponsal">Corresponsal</option>
                <option value="Nequi">Nequi</option>
                <option value="PSE">PSE</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="AmericanExpress">AmericanExpress</option>
              </select>
              <div className="FormulariosBancarios">
                {pago === "Visa" ||
                pago === "Bancolombia" ||
                pago === "MasterCard" ||
                pago === "AmericanExpress" ? (
                  <div className="containerForm">
                    <form action="/procesar_pago" method="post">
                      <label htmlFor="nombre">
                        Nombre del Titular de la Tarjeta:
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                      ></input>

                      <label htmlFor="numero">Número de Tarjeta:</label>
                      <input
                        type="text"
                        id="numero"
                        name="numero"
                        placeholder="**** **** **** ****"
                        required
                      ></input>

                      <label htmlFor="vencimiento">Fecha de Vencimiento:</label>
                      <input
                        type="text"
                        id="vencimiento"
                        name="vencimiento"
                        placeholder="MM/YY"
                        required
                      ></input>

                      <label htmlFor="cvv">Código de Seguridad (CVV):</label>
                      <input type="text" id="cvv" name="cvv" required></input>

                      <label htmlFor="monto">Monto a Pagar:</label>
                      <input
                        type="text"
                        id="monto"
                        name="monto"
                        required
                      ></input>

                      <div className="label">
                        <input
                          id="terminos"
                          type="checkbox"
                          name="terminos"
                          required
                        ></input>
                        <label htmlFor="terminos">
                          Acepto los{" "}
                          <Link to="/terminos">Términos y Condiciones</Link>
                        </label>
                      </div>
                    </form>
                  </div>
                ) : pago === "PSE" ? (
                  <div className="containerForm">
                    <a
                      target="_blank"
                      href="https://www.pse.com.co/persona-tu-primer-pago-por-pse"
                      rel="noopener noreferrer"
                    >
                      Ir a PSE
                    </a>
                  </div>
                ) : pago === "Codigo Qr" ? (
                  <div className="containerForm">
                    <p>Escanea el Qr</p>
                    <img width={250} src={qr} alt="" />
                  </div>
                ) : pago=== "Nequi" ? (
                  <div className="containerForm">
                    <a
                      target="_blank"
                      href="https://transacciones.nequi.com/bdigital/login.jsp"
                      rel="noopener noreferrer"
                    >
                      Ir a Nequi
                    </a>
                  </div>
                ):null}
              </div>
            </div>
          </>
        )}

        <main className="productPago">
          <article className="campoText">
            <h3>Agrega una nota a tu pedido</h3>

            <textarea
              className="mensaje"
              name="mensaje"
              id=""
              cols="20"
              rows="5"
              onChange={actMensaje}
            ></textarea>
          </article>

          <article className="precioTotal">
            <p> $ {totalprecio.toLocaleString()}</p>

            <button onClick={enviodeproductos} className="comprar">
              COMPRAR PRODUCTOS
            </button>
            <p className="im">
              Al dar a comprar aceptas los terminos y condiciones de envios de
              productos
            </p>
          </article>
        </main>
      </div>
      {modal && (
        <main className={`modalCompra ${venta ? "active" : ""}`}>
          <article className="cont_modalCompra">
            <section className="mensaje_Compra">
              <img src={`${venta ? correcto : incorrecto}`} alt="" />
              <p>
                {venta
                  ? "Tu Compra esta en camino"
                  : "No se ha podido realizar la compra"}
              </p>
            </section>
            <section className="btns_modalCompra">
              <button
                className="modalBtnTry"
                onClick={() => {
                  setVenta(false);
                  setModal(false);
                  Navigate(
                    "/Home"
                  );
                
                }}
              >
                {`${venta ? "Seguir viendo productos" : "Reintentar"}`}
              </button>
              {venta && (
                <button
                  className="modalBtnExit"
                  onClick={() => {
                    setVenta(false);
                    setModal(false);
                    Navigate(
                      `/perfil/${(
                        usuario.nombre + usuario.apellido
                      ).toLowerCase()}`
                    );
                  }}
                >
                  Ver historial de Compras
                </button>
              )}
            </section>
          </article>
        </main>
      )}
      <Footer />
    </>
  );
};
