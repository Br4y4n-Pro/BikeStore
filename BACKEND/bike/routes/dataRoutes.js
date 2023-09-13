const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const multer = require('multer');
const path = require('path');

// Configuración de multer
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, '../public/uploads');
    console.log(file) // Ruta donde se guardarán las imágenes en el servidor
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo en el servidor (incluyendo la extensión original)
  },
});

const upload = multer({ storage: storage });




router.get('/productos', dataController.conseguirProductos);
router.get('/Allusuarios', dataController.conseguirUsuarios);


router.post('/usuarios', dataController.ingresoUsuario)
router.post('/usuario', dataController.registerUser);
router.post('/addproducto',upload.single('imagen_producto'), dataController.addProductos)


// router.delete('/productos',dataController.deleteProductos)
// router.put('/registro',dataController.uregistro)

module.exports = router;