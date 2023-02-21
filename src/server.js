// ? El archivo server.js contiene el código de JavaScript para iniciar un servidor con nuestra aplicación y responder a las solicitudes.

const express = require('express');
const path = require('path'); // * Modulo por defecto de Nodejs, en path se especifican las rutas en las cuales el intérprete de comandos debe buscar los programas a ejecutar.


// * INITIALIZATIONS * \\
// express framework
const app = express();


// * SETTINGS * \\
// --> port
app.set('port', process.env.PORT || 3000);

// --> views dir and engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// --> middleware's
app.use(express.urlencoded({extended:false}));

// --> global vars

// --> router requires
const routesIndex = require('./routes/index')


// --> routes
// app.get('/', (req, res) => {
//     res.send('<h1>Hola Mundo!!!</h1>');
// });
app.use('/', routesIndex);


// --> static files
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;