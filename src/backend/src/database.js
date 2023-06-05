// Este archivo sera para conectarnos a la base de datos MongoDB

const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);
// Aqui van las credenciales de la DB, en mi caso, estoy usando ATLAS
const uri = process.env.MONGODB_URI 
          ? process.env.MONGODB_URI 
          : 'mongodb://localhost/otzzi';
//const uri = "mongodb://localhost/otzzi";

// Necesitamos de 'npm install mongodb --save', y ejecutar 'mongod' para correr: mongod --dbpath "D:\Informatica PD\MongoDB\data\db"

//  Coneccion a la DB https://mongoosejs.com/docs/connections.html
mongoose
  .connect( uri, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then( db => console.log( "La BD esta conectada!" ) )
  .catch( err => console.error( err ) );

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
});

module.exports = mongoose;                              // Necesitamos exportar el archivo pal server