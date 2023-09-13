const { Pool } = require("pg");
const { CONFIG_BD } = require("../config/db");
const pool = new Pool(CONFIG_BD);





//Logica para el inicio de sesion separa en modelo
//FUNCIONANDO
const correoExiste = async (correo_electronico) => {
  console.log(correo_electronico);
  const result = await pool.query(
    "SELECT * FROM clientes WHERE correo_electronico = $1",
    [correo_electronico]
  );
  try {
    //Usuario existe
    if (result.rows.length === 1) {
      return result.rows[0];
    } else {
      return null; //no se encontro el correo
    }
  } catch (error) {
    console.error("Error al obtener usuario por email", error);
    throw error;
  }
};
//funcionando

const dIExiste = async (documento_identidad) => {
  console.log(documento_identidad);
  const result = await pool.query(
    "SELECT * FROM clientes WHERE documento_identidad = $1",
    [documento_identidad]
  );
  try {
    //Usuario existe
    if (result.rows.length === 1) {
      return result.rows[0];
    } else {
      return null; //no se encontro el correo
    }
  } catch (error) {
    console.error("Error al obtener usuario por documento de identidad", error);
    throw error;
  }
};
//funcionando

const getProductos = async () => {
  try {
    const result = await pool.query("select * from productos");
    return result.rows;
  } catch (error) {
    console.error("Error al obtener productos", error);
    throw error;
  }
};
//funcionando

const getUsuarios = async () => {
  try {
    const result = await pool.query("select * from clientes");
    return result;
  } catch (error) {
    console.error("Error al obtener listado de clientes", error);
    throw error;
  }
};
//funcionando
const registrarUsuario = async (datos) => {
  const {
    nombre,
    apellido,
    correo_electronico,
    direccion,
    numero_telefono,
    documento_identidad,
    edad,
    hash_contraseña,
  } = datos;

  console.log(datos);

  const result = await pool.query(
    "INSERT INTO clientes (nombre, apellido, correo_electronico, direccion, hash_contraseña, numero_telefono, documento_identidad,edad) VALUES ( $1,$2,$3,$4,$5,$6,$7,$8)",
    [
      nombre,
      apellido,
      correo_electronico,
      direccion,
      hash_contraseña,
      numero_telefono,
      documento_identidad,
      edad,
    ]
  );

  console.log(result);
    try {
      //Usuario creado
      if (result.rowCount === 1) {
        return result.rowCount;
        }else{
          return null; //no se ereo usuario
        }
  }catch{
    console.error("Error al registrar el usuario", error);
      throw error;
};
}

const agregarProducto =async (datos) =>{
  const {
    nombre_producto,
    descripcion,
    precio,
    stock,
    categoria,
    tipo,
    marca,
    color,
    img_producto,
  } = req.body;

  const result = await pool.query(
    "INSERT INTO productos (Nombre_Producto,Descripcion,Precio,Stock,Categoria,Tipo,Marca,Color,Img_Producto) VALUES ( $1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [
      nombre_producto,
      descripcion,
      precio,
      stock,
      categoria,
      tipo,
      marca,
      color,
      img_producto,
    ]
  );
}

module.exports = {
  correoExiste,
  dIExiste,
  getProductos,
  getUsuarios,
  registrarUsuario,
  agregarProducto,
};
