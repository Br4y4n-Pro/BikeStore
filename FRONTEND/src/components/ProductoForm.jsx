import { useState } from "react";
import "./ProductoForm.css"; // Estilos CSS para el formulario
import { Navbar } from "./Naver";

import { enviarImagen } from "../logic/productoLogic";
export const ProductoForm = () => {
  const [producto, setProducto] = useState({
    nombre_producto: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
    tipo: "",
    marca: "",
    color: [], // Utilizamos el estado para mantener los colores seleccionados
    img_producto: null,
  });

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    const valor = event.target.value;

    // Clonar el array color desde el estado actual
    const nuevoColor = [...producto.color];

    if (checked) {
      nuevoColor.push(valor);
    } else {
      const eliminar = nuevoColor.indexOf(valor);
      if (eliminar !== -1) {
        nuevoColor.splice(eliminar, 1);
      }
    }

    // Actualizar el estado con los nuevos colores
    setProducto({ ...producto, color: nuevoColor });
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      console.log(e.target.files[0]);
      setProducto({ ...producto, img_producto: e.target.files[0] });
    } else {
      setProducto({ ...producto, [e.target.name]: e.target.value });
    }
  };

  const envioProducto = async (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    // Agrega el archivo de imagen al FormDataImagen
    try {
      const res = await fetch("http://localhost:3050/addproducto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      if (res.status === 200) {
        // Los datos del formulario se procesaron exitosamente
        alert("Datos del formulario procesados exitosamente");
        enviarImagen(producto.img_producto, producto.nombre_producto);
      } else {
        // Manejar errores aquí
        console.log("Error al procesar datos del formulario");
      }
    } catch (error) {
      console.error(error);
      // Maneja errores de conexión u otros errores
    }
  };

  return (

    
    <>
    <Navbar/>

      <article className="contenedor-formulario">
        <form
          className="datos_formulario"
          encType="multipart/form-data"
          onSubmit={envioProducto}
        >
          <input
            className="producto_input"
            type="text"
            name="nombre_producto"
            placeholder="Nombre del Producto"
            onChange={handleChange}
          />
          <textarea
            className="producto_input textArea"
            type="text"
            name="descripcion"
            placeholder="Descripcion del producto"
            onChange={handleChange}
          />
          <input
            className="producto_input"
            type="number"
            name="precio"
            placeholder="Precio del producto"
            onChange={handleChange}
          />
          <input
            className="producto_input"
            type="number"
            name="stock"
            placeholder="Stock del  producto"
            onChange={handleChange}
          />
          <input
            className="producto_input"
            type="text"
            name="categoria"
            placeholder="Categoria del  producto"
            onChange={handleChange}
          />
          <input
            className="producto_input"
            type="text"
            name="tipo"
            placeholder="Tipo de producto"
            onChange={handleChange}
          />
          <input
            className="producto_input"
            type="text"
            name="marca"
            placeholder="Marca del producto"
            onChange={handleChange}
            />
            {/* CHECKBOX ZONE */}
          <div className="zoneColor">
            <p>Selecciona los colores disponibles</p>
            <div className="input-p">
  <input
    className="checkox_input"
    type="checkbox"
    id="color-grey"
    name="color"
    value="grey"
    onChange={handleCheckboxChange}
  />
  <label htmlFor="color-grey" style={{ "--color-selected": "grey" }}>
    <div className="checkbox-design"></div>
  </label>
  <span>Gris</span>
</div>

<div className="input-p">
  <input
    className="checkox_input"
    type="checkbox"
    id="color-red"
    name="color"
    value="red"
    onChange={handleCheckboxChange}
  />
  <label htmlFor="color-red" style={{ "--color-selected": "red" }}>
    <div className="checkbox-design"></div>
  </label>
  <span>Rojo</span>
</div>

<div className="input-p">
  <input
    className="checkox_input"
    type="checkbox"
    id="color-blue"
    name="color"
    value="blue"
    onChange={handleCheckboxChange}
  />
  <label htmlFor="color-blue" style={{ "--color-selected": "blue" }}>
    <div className="checkbox-design"></div>
  </label>
  <span>Azul</span>
</div>

<div className="input-p">
  <input
    className="checkox_input"
    type="checkbox"
    id="color-black"
    name="color"
    value="black"
    onChange={handleCheckboxChange}
  />
  <label htmlFor="color-black" style={{ "--color-selected": "black" }}>
    <div className="checkbox-design"></div>
    <span></span>
  </label>
  <span>Negro</span>
</div>

<div className="input-p">
  <input
    className="checkox_input"
    type="checkbox"
    id="color-white"
    name="color"
    value="white"
    onChange={handleCheckboxChange}
  />
  <label htmlFor="color-white" style={{ "--color-selected": "white"}}>
    <div className="checkbox-design"></div>
  </label>
  <span>Blanco</span>
</div>

          </div>
          <input
            className="file_file"
            accept="image/*"
            type="file"
            name="imagen_producto"
            onChange={handleChange}
          />

          <button type="submit">Agregar Producto</button>
        </form>
      </article>
    </>
  );
};
// nombre_producto,
// descripcion,
// precio,
// stock,
// categoria,
// tipo,
// marca,
// color,
// img_producto,
