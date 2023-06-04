// Este archivo sera para conectarnos a la base de datos MongoDB

const mongoose = require('mongoose');

// Aqui van las credenciales de la DB, en mi caso, estoy usando ATLAS
const uri = "mongodb+srv://admin:Grupo12GPS_UBB@gps-grupo12.iva2kht.mongodb.net/?retryWrites=true&w=majority";

//const uri = "mongodb://localhost/tareas-mern";

// Necesitamos de 'npm install mongodb --save', y ejecutar 'mongod' para correr
// mongod --dbpath "D:\Informatica PD\MongoDB\data\db"

mongoose
  .connect( uri, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then( db => console.log( "La BD esta conectada!" ) )
  .catch( err => console.error( err ) );


module.exports = mongoose;                              // Necesitamos exportar el archivo pal server