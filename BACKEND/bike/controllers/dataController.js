const bikeModel = require("../models/BikeModelos");
const bcrypt = require("bcrypt");

//funciona de maraavilla :)
const ingresoUsuario = async (req, res) => {
  try {
    const { correo_electronico, hash_contraseña } = req.body;
    // console.log(correo_electronico, hash_contraseña);

    const usuario = await bikeModel.correoExiste(correo_electronico);
    // console.log("soy el usuario de usuario.", usuario);
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
      return res.status(401).json({ mensaje: "contraseña incorrectas."});
    }

    return res.status(200).json({ info: usuario  });
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
      res.status(201).json({ mensaje: "usuario registrado exitosamente" });
    } else {
      res
        .status(401)
        .json({ mensaje: "no se pudo guardar en la base de datos" });
    }
  } catch (error) {
    console.log("hubo un error al registrar ", error);
  }
};

const addProductos = async (req, res) => {

  console.log(req.body.nombre_producto)
  const productoExiste = bikeModel.productoExiste(req.body.nombre_producto);
console.log(productoExiste,"<----<---<---<---")
  if (!productoExiste) {
    return res
      .status(400)
      .json({ message: "El nombre del producto ya esta registrado" });
  }

  const newProduct = bikeModel.agregarProducto(req.body);

  if (newProduct) {
    res.status(201).json({ message: "Producto registrado exitosamente" });
  } else {
    res.status(401).json({ mensaje: "no se pudo guardar en la base de datos" });
  }
  console.log(newProduct, "linea 98 addProductos dataControllers");
  console.log(req.body, "Linea 100 dataControllers");
};

const addImageProduct = async (req, res) => {
  try {
    // Accede al archivo de imagen
    const productoExiste = bikeModel.productoExiste(req.body.nombre_producto);

    if (!productoExiste) {
      return res
        .status(400)
        .json({ message: "El nombre del producto ya esta registrado" });
    }
    const newImagen = bikeModel.imgProducto(req.body, req.file);
    if (newImagen) {
      res.status(200).json({ message: "imagen agregado exitosamente" });
    } else {
      res.status(400).json({ message: "Imagen no agregada" });
    }
    // Devuelve una respuesta exitosa
  } catch (error) {
    console.error(error);
    // Maneja los errores aquí y devuelve una respuesta de error si es necesario
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const conseguirProducto = async (req,res) =>{
  const IDproducto = req.params.id;
  const producto = await bikeModel.getProducto(IDproducto);

  
  if (!producto) {
    return res.status(404).send('Usuario no encontrado');
  }

  res.send(producto)

;
}


const ventas = async(req,res) =>{
  const body = req.body;
  const registroventa = await bikeModel.registrarVenta(body)
  if (!registroventa) {
      res.status(401).json({error: 'Error al registrar la venta'})
  }
  res.status(201).json({mensaje:'se registro la venta'})

}



const busqueda = async (req, res) => {
  const query = req.query.q;
  try {
    // Realiza una consulta SQL para buscar registros que coincidan parcialmente con 'query'
    const resultados = await bikeModel.buscarProductos(query); // Usa await aquí

    // Envía los resultados como respuesta JSON
    res.json(resultados);
  } catch (error) {
    console.error('Error al buscar en la base de datos:', error);
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
}




module.exports = {
  ingresoUsuario, //⭕
  conseguirProductos, //⭕
  conseguirUsuarios, //⭕
  registerUser, //⭕
  addProductos, //⭕
  addImageProduct,//⭕ lento
  conseguirProducto,
  busqueda,
  ventas,

};
