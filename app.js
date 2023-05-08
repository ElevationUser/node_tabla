const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
console.log(argv);

crearTabla(argv.base,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch(err=>console.log(err));




