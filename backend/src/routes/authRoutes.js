const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Importa o controlador de autenticação

router.post('/login', authController.generateToken);

module.exports = router;