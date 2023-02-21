const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.pug', { mensaje: 'Usando Pug JS en Express' }); // Se muestra la plantilla hello.pug
});

module.exports = router