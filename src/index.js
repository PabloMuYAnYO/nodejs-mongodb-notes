// * ARCHIVO PRINCIPAL DE ARRANQUE DE LA APLICACIÓN

const app = require('./server');
const colors = require('colors');



app.listen(app.set('port'), () => {
    console.log('Server on port:'.blue +  ` ${app.get('port')}`.yellow);
});