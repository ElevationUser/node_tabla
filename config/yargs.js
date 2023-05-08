const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        description:'numero que especifica la base de la multiplicacion',
        demandOption:true
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        } 
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        description:'especifica si se lista',
        default:'true'
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        } 
        return true;
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        description:'numero que especifica hasta donde multiplicar',
        default:10
    })
    .check( (argv, options) => {
        if (isNaN(argv.h)) {
            throw 'El hasta debe ser numerico'
        } 
        return true;
    })
    .argv;

    module.exports=argv;