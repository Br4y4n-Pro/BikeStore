const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/usuarios', dataController.iniciarSesion)
// router.delete('/productos',dataController.deleteProductos)
router.get('/productos', dataController.getProduc);
router.get('/usuarios', dataController.getUsuario);
// router.post('/registerUser', dataController.registerUser);
// router.put('/registro',dataController.uregistro)

module.exports = router;