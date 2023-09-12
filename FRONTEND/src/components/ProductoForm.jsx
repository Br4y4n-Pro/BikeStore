import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './ProductoForm.css'; // Estilos CSS para el formulario

const ProductoForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log(data);
  };

  return (
    <div className="producto-form-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
