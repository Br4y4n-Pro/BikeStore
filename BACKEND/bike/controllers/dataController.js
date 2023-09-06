const { Pool } = require("pg");
const { CONFIG_BD } = require("../config/db");
const bcrypt = require("bcrypt");
const pool = new Pool(CONFIG_BD);

const getProduc = (req, res) => {
  pool.query("SELECT * FROM prod", (error, result) => {
    if (error) {
      console.error("Error al obtener los datos", error);
      res.status(500).send("Error al obtener datos");
    } else {
      res.json(result.rows);
    }
  });
};

const getUsuario = (req, res) => {
  pool.query("SELECT * FROM usuarios", (error, result) => {
    if (error) {
      console.error("Error al obtener los datos", error);
      res.status(500).send("Error al obtener datos");
    } else {
      res.json(result.rows);
    }
  });
};

const registerUser = async (req, res) => {
  const {
    nombre,
    apellido,
    correo_electronico,
    direccion,
    hash_contraseña,
    numero_telefono,
    documento_identidad,
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, apellido, correo_electronico, direccion, hash_contraseña, numero_telefono, documento_identidad) VALUES ( $1,$2,$3,$4,$5,$6,$7)",
      [
        nombre,
        apellido,
        correo_electronico,
        direccion,
        hash_contraseña,
        numero_telefono,
        documento_identidad,
      ]
    );

    res.status(201).json({ message: "usuario registrado exitosamente" });

    const user = result.rows[0];
    console.log(user);
  } catch (error) {
    console.log("hubo un error al registrar ", error);
  }
};

const iniciarSesion = async (req, res) => {
  const { correo_electronico, hash_contraseña } = req.body;
  console.log(correo_electronico, hash_contraseña);

  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE correo_electronico = $1",
      [correo_electronico]
    );
    const user = result.rows[0];

  
    //Usuario existe
    if (result.rows.length === 1) {
      //Si existe verificar si es la misma contraseña
      if (hash_contraseña === user.hash_contraseña) {
        return res.status(200).json({ message: "Inicio Sesion exitoso" });
      }else{
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } else{
      return res.status(400).json({ error: "No existe usuario" });
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

const addProductos = async (req, res) => {
  const {
    Nombre_Producto,
    Descripcion,
    Precio,
    Stock,
    Categoria,
    Tipo,
    Marca,
    Color,
    Img_Producto,
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO prod (Nombre_Producto,Descripcion,Precio,Stock,Categoria,Tipo,Marca,Color,Img_Producto) VALUES ( $1,$2,$3,$4,$5,$6,$7,$8,$9)",
      [
        Nombre_Producto,
        Descripcion,
        Precio,
        Stock,
        Categoria,
        Tipo,
        Marca,
        Color,
        Img_Producto,
      ]
    );

    res.status(201).json({ message: "usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al agregar Producto ", error);
    res.status(500).json({ error: "Error al agregar Producto" });
  }
};

module.exports = {
  getProduc,
  registerUser,
  getUsuario,
  iniciarSesion,
  addProductos,
};
