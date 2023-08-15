const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/prod', dataController.getProduc);
//router.get('/getPersons', dataController.getPersons);
router.post('/registerUser', dataController.registerUser);

module.exports = router;