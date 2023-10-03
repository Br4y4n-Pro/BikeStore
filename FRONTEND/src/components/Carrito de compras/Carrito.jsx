import "../../assets/styles/Carrito.css";
import { Navbar } from "../Naver";
import { Footer } from "../footer";
import { useGlobalStore } from "../../store/productoFetchStore";


export const Carrito = () => {
  const { carrito, contador, totalprecio,agregarProducto,eliminarProducto,incrementar,eliminar} = useGlobalStore();
//id_producto,id_cliente,estado_v,cantidad,costo,costo_unitario,forma_pago

  const handleChangeEliminar = (productoId) => {
    console.log(productoId)
    eliminarProducto(productoId)
    eliminar()


  };

  const handleChangeAñadir = (productoId) => {
    console.log(productoId)
    agregarProducto(productoId)
    incrementar()
  };

  
console.log(totalprecio)
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
        <main  className="list_product">
        {contador >= 1 ? (
          carrito.map((producto) => (
              <div key={producto.id_producto} className="Item">
             <article className="producto">

                <img className="img_cicla"
                  src={`http://localhost:3050${producto.img_producto}`}
                  alt={producto.nombre_producto}
                />

              <div className="precioNombre">
                <p className="nombre">{producto.nombre_producto}</p>
                <p className="precio"> $ {producto.precio}</p>
              </div>
             </article>
              <article className="cantidadCar">
           
                <button onClick={()=>{handleChangeEliminar(producto.id_producto)}} className="min">{producto.cantidad === 1 ? <p>Eliminar</p> : <p>-</p> }</button>
                <div className="cantidadtext">{producto.cantidad}</div>
                <button onClick={()=>{handleChangeAñadir(producto.id_producto)}} className="max">+</button>
              </article>
             <article className="precioSum">
             <p>
                    {producto.cantidad * producto.precio}
              </p>
             </article>
              </div>
          ))
        ) : (
          <div className="notProduct">
            <p>NO SE HA AGREGADO NINGUN PRODUCTO</p>
          </div>
        )}
            </main>

        <main className="productPago">
          <article className="campoText">
            <h3>Agrega una nota a tu pedido</h3>

            <textarea
              className="mensaje"
              name="mensaje"
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </article>

          <article className="precioTotal">
           <p> $ {totalprecio}</p>
          
            <button className="comprar">COMPRAR PRODUCTOS</button>
            <p className="im">
              Al dar a comprar aceptas los terminos y condiciones de envios de productos
            </p>
          </article>
          
        </main>
      </div>
          <main className="modalCompra">
            
          </main>
      <Footer />
    </>
  );
};
