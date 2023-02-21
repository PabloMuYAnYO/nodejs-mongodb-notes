const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;


// Connection
const { MONGODB_HOST, MONGODB_DATABASE } = process.env;

const MONGODB = `mongodb://${ MONGODB_HOST}/${ MONGODB_DATABASE }`;

// Connect MongoDB at default port 27017.
mongoose.connect(MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});