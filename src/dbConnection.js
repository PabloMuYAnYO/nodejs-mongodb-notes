const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

// Connection
const { MONGODB_HOST, MONGODB_DATABASE } = process.env;

const MONGODB = `mongodb://${ MONGODB_HOST}/${ MONGODB_DATABASE }`

mongoose.connect(MONGODB)
    .then( () => { console.log('Connected with mongo'); } )
    .catch( (err) => console.log(err) )