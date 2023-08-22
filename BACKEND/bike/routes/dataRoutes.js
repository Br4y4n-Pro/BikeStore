const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// router.get('/producto', dataController.getProduc);
router.get('/usuarios', dataController.getUsuario);
// router.post('/registerUser', dataController.registerUser);

module.exports = router;