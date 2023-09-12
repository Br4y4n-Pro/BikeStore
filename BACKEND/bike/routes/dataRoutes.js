const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
// const { upload } = require('../app');


router.post('/usuarios', dataController.Usuario)
// router.delete('/productos',dataController.deleteProductos)
router.get('/productos', dataController.getProduc);
// router.get('/usuarios', dataController.getUsuario);
// router.post('/usuario', dataController.registerUser);
// router.post('/addProducto',upload.single('imagen_producto'), dataController.addProductos)
// router.put('/registro',dataController.uregistro)

module.exports = router;