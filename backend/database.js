// Este archivo sera para conectarnos a la base de datos MongoDB
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI || 'mongodb://localhost/otzzi';
//const uri = "mongodb://localhost/otzzi";

//  Coneccion a la DB https://mongoosejs.com/docs/connections.html
mongoose
  .connect( uri, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then( db => console.log( "Connected to MongoDB database!" ) )
  .catch( err => console.error( err ) );

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
});

module.exports = mongoose;                              // Necesitamos exportar el archivo pal server