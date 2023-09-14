const bikeModel = require("../models/BikeModelos");
const bcrypt = require("bcrypt");






//funciona de maraavilla :)
const ingresoUsuario = async (req, res) => {
  try {
    const { correo_electronico, hash_contraseña } = req.body;
    console.log(correo_electronico, hash_contraseña);

    const usuario = await bikeModel.correoExiste(correo_electronico);
    console.log("soy el usuario de usuario.", usuario);
    if (!usuario) {
      return res.status(401).json({ mensaje: "Correo No existe" });
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const contraseñaCoincide = await bcrypt.compare(
      hash_contraseña,
      usuario.hash_contraseña
    );
    if (!contraseñaCoincide) {
      // Las contraseñas no coinciden, devolver error
      return res.status(401).json({ mensaje: "Credenciales incorrectas." });
    }

    return res.status(200).json({ mensaje: "todo ando de maravilla" });
  } catch (error) {
    console.error("Error al iniciar sesion", error);
    res
      .status(500)
      .json({ mensaje: "Error al iniciar sesion usuario no encontrado" });
  }
};

//funciona de maraavilla :)
const conseguirProductos = async (req, res) => {
  try {
    const productos = await bikeModel.getProductos();
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos", error);
    res.status(500).json({ mensaje: "Error al obtener productos" });
  }
};
//funciona de maraavilla :)⭕
const conseguirUsuarios = async (req, res) => {
  const usuarios = await bikeModel.getUsuarios();

  const { rowCount, rows } = usuarios;
  console.log(rowCount, rows);
  res.status(200).json({ rowCount, rows });
};
//funciona de maraavilla :)⭕

const registerUser = async (req, res) => {
  try {
    const existeCorreo = await bikeModel.correoExiste(
      req.body.correo_electronico
    );
    const dIExiste = await bikeModel.dIExiste(req.body.documento_identidad);
    if (existeCorreo) {
      return res.status(401).json({ mensaje: "Correo ya esta registrado" });
    }
    if (dIExiste) {
      return res
        .status(401)
        .json({ mensaje: "Documento de identidad ya esta registrado" });
    }

    // Realiza el hash de la contraseña
    const hashContraseña = await bcrypt.hash(req.body.hash_contraseña, 10); // 10 es el número de rondas de hashing

    // Agrega hashContraseña al objeto req.body
    req.body.hash_contraseña = hashContraseña;

    const newClient = bikeModel.registrarUsuario(req.body);

    if (newClient) {
      res.status(201).json({ message: "usuario registrado exitosamente" });
    }
  } catch (error) {
    console.log("hubo un error al registrar ", error);
  }
};


const addProductos = async (req,res)=>{

  res.status(201).json({ message: "usuario registrado exitosamente" });

  console.log(req.body,"Linea 100 dataControllers")

  
}

const addImageProduct = async (req, res) => {
  try {
    // Accede a los datos del formulario
    const {
      nombre_producto,
     
    } = req.body;

    // Accede al archivo de imagen
    const imagen_producto = req.file;
console.log(imagen_producto,"addProductos Linea 108 dataControllers")
console.log(nombre_producto,)
    // Realiza la lógica de procesamiento aquí (guardar en la base de datos, etc.)

    // Devuelve una respuesta exitosa
    res.status(200).json({ message: "Producto agregado exitosamente" });
  } catch (error) {
    console.error(error);
    // Maneja los errores aquí y devuelve una respuesta de error si es necesario
    res.status(500).json({ error: "Error en el servidor" });
  }
};


module.exports = {
  ingresoUsuario, //⭕
  conseguirProductos, //⭕
  conseguirUsuarios, //⭕
  registerUser,//⭕
  addProductos,
  addImageProduct,
};
