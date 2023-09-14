const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

const path = require("path");
const multer = require("multer");
const uuid = require("uuid");
const { error } = require('console');

// Configura Multer para guardar archivos en una carpeta
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname.toLowerCase());
   
  },
});

const upload =
  multer({
    storage,
    dest: path.join(__dirname, "public/uploads"),
    // fileFilter: (req, file, cb) => {
    //   const filetypes = /jpgeg|jpg|png|gif|webp/;
    //   const mimetype = filetypes.test(file.mimetype);
    //   const extname = filetypes.test(path.extname(file.originalname));
    //   if (mimetype && extname) {
    //     return cb(null, true);
    //   }
    //   cb("Error: Archivo no soportado",error);
    // },
  }).single("imagen_producto")




router.post('/addproducto',upload, dataController.addProductos)
router.post('/addproducto/imagen',upload, dataController.addImageProduct)


router.get('/productos', dataController.conseguirProductos);
router.get('/Allusuarios', dataController.conseguirUsuarios);


router.post('/usuarios', dataController.ingresoUsuario)
router.post('/usuario', dataController.registerUser);


// router.delete('/productos',dataController.deleteProductos)
// router.put('/registro',dataController.uregistro)

module.exports = router;