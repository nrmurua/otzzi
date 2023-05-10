const express = require('express');
const router = express.Router();
const tattoController = require('../controllers/tattoController');

// Rutas para tattoas
router.post('/tattos', tattoController.createTattoo);
router.get('/tattos', tattoController.getTattoos);
router.get('/tattos/:id', tattoController.getTattooById);
router.put('/tattos/:id', tattoController.updateTattoo);
router.delete('/tattos/:id', tattoController.deleteTattoo);

module.exports = router;
