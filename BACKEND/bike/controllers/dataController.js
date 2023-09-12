const bikeModel = require("../models/BikeModelos");
const bcrypt = require('bcrypt')


const Usuario = async (req, res) => {
  try {
    const { correo_electronico, hash_contraseña } = req.body;
  
    const usuario = await bikeModel.iniciarSesion(correo_electronico);

if (!usuario) {
 return res.status(401).json({ mensaje: "Correo No existe" });
  
}

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const contraseñaCoincide = await bcrypt.compare(hash_contraseña, usuario.hash_contraseña);
    if (!contraseñaCoincide) {
      // Las contraseñas no coinciden, devolver error
      return res.status(401).json({ mensaje: 'Credenciales incorrectas.' });
    }

    
  } catch (error) {
    console.error("Error al iniciar sesion", error);
    res.status(500).json({ mensaje: "Error al iniciar sesion usuario no encontrado" });
  }
};

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

const addProductos = async (req, res) => {
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
  const pathImagen = req.file.path;

  try {
    if (condition) {
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
  addProductos,
  Usuario,
};
