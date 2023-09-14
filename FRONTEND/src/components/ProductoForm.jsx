import { useState } from "react";
import "./ProductoForm.css"; // Estilos CSS para el formulario
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
      } else {
        // Manejar errores aquí
        console.log("Error al procesar datos del formulario");
      }
    } catch (error) {
      console.error(error);
      // Maneja errores de conexión u otros errores
    }

    enviarImagen(producto.img_producto,producto.nombre_producto)
  };


  const enviarImagen = async (imagen,nombre) => {
    console.log(imagen)
    try {
      const formData = new FormData();
      formData.append("imagen_producto", imagen);
      formData.append("nombre_producto", nombre)
  
      const res = await fetch("http://localhost:3050/addproducto/imagen", {
        method: "POST",
        body: formData,
      });
  
      if (res.status === 200) {
        // La imagen se procesó exitosamente
        alert("Imagen procesada exitosamente");
      } else {
        // Manejar errores aquí
        console.log("Error al procesar la imagen");
      }
    } catch (error) {
      console.error(error);
      // Manejar errores de conexión u otros errores
    }
  };
  return (
    <>
      <article className="contenedor-formulario">
        <form encType="multipart/form-data" onSubmit={envioProducto}>
          <input
            type="text"
            name="nombre_producto"
            placeholder="Nombre del Producto"
            onChange={handleChange}
          />
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion del producto"
            onChange={handleChange}
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio del producto"
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock del  producto"
            onChange={handleChange}
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoria del  producto"
            onChange={handleChange}
          />
          <input
            type="text"
            name="tipo"
            placeholder="Tipo de producto"
            onChange={handleChange}
          />
          <input
            type="text"
            name="marca"
            placeholder="Marca del producto"
            onChange={handleChange}
          />
          <div className="zoneColor">
            <div className="input-label">
              <input
                type="checkbox"
                name="color"
                value="grey"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="color-grey">Gris</label>
            </div>

            {/* CHECKBOX ZONE */}
            <div className="input-label">
              <input
                type="checkbox"
                name="color"
                value="red"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="color-red">Rojo</label>
            </div>
            <div className="input-label">
              <input
                type="checkbox"
                name="color"
                value="blue"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="color-blue">Azul</label>
            </div>
            <div className="input-label">
              <input
                type="checkbox"
                name="color"
                value="black"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="color-black">Negro</label>
            </div>
            <div className="input-label">
              <input
                type="checkbox"
                name="color"
                value="white"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="color-white">Blanco</label>
            </div>
          </div>
          <input
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
