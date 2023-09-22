export const enviarImagen = async (imagen,nombre) => {
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
        console.log("se agrego la imagen al producto")
        // La imagen se procesó exitosamente
      } else {
        // Manejar errores aquí
        console.log("Error al procesar la imagen");
      }
    } catch (error) {
      console.error(error);
      // Manejar errores de conexión u otros errores
    }
  };