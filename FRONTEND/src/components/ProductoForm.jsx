import { useForm, Controller } from 'react-hook-form';
import './ProductoForm.css'; // Estilos CSS para el formulario

const ProductoForm = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const formData = new FormData();
      formData.append('nombre_producto', data.nombre_producto);
      formData.append('descripcion', data.descripcion)
      formData.append('precio', data.precio)
      formData.append('stock', data.descripcion)
      formData.append('categoria', data.categoria)
      formData.append('tipo', data.tipo)
      formData.append('marca', data.marca)
      formData.append('color', data.color)
      formData.append('imagen_producto', data.imagen_producto[0]);

      console.log(formData)
      const response = await fetch('http://localhost:3050/addproducto', {
        method: 'POST',
        body: formData,
        
      });
      console.log(formData)
      if (response.ok) {
        console.log('Archivo enviado correctamente');
      } else {
        console.error('Error al enviar el archivo');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="producto-form-container">
      <h2>Agregar Producto</h2>
      <form encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nombre_producto">Nombre del Producto</label>
          <Controller
            name="nombre_producto"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <Controller
            name="descripcion"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea {...field} rows="4" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <Controller
            name="precio"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" step="0.01" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <Controller
            name="stock"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="number" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoría</label>
          <Controller
            name="categoria"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <Controller
            name="tipo"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <Controller
            name="marca"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <Controller
            name="color"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imagen_producto">Imagen del Producto</label>
          <Controller
            name="imagen_producto"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="file" accept="image/*" />}
          />
        </div>

        <div className="form-group">
          <button type="submit">Guardar Producto</button>
        </div>
      </form>
    </div>
  );
};

export default ProductoForm;
