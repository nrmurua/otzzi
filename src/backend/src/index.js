require ('dotenv').config();    //  Importa las credenciales de la BD

const app = require('./app');
require('./database');

/*
app.listen(4000, () =>
    console.log('Server on port 4000')
);*/
async function main() {
    await app.listen( app.get('port') );
    console.log('Server en el puerto ', app.get('port') );
}

main();