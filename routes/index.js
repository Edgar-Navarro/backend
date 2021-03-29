const express = require('express');
const router = express.Router();
const calcularController = require('../controllers/calcularController');

module.exports = function() {
    router.get('/index', 
    calcularController.index
    );
    router.post('/calcular', 
    calcularController.calcular
    );
    
    return router;
}
 