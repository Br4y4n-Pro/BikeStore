const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

const upload = require('../models/multerConfig');



router.get('/productos', dataController.conseguirProductos);
router.get('/Allusuarios', dataController.conseguirUsuarios);
router.get('/productos/:id', dataController.conseguirProducto)
router.get('/buscar', dataController.busqueda)


router.post('/addproducto',upload, dataController.addProductos)
router.post('/addproducto/imagen',upload, dataController.addImageProduct)



router.post('/usuarios', dataController.ingresoUsuario)
router.post('/registro', dataController.registerUser);


// router.delete('/productos',dataController.deleteProductos)
// router.put('/registro',dataController.uregistro)

module.exports = router;