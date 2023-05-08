const fs = require('node:fs');
const colors=require('colors');

const crearTabla=async(base = 1,listar=true,hasta=10) =>{
        
    try {
        if (listar) {
            console.log(`===============================================`.rainbow);
            console.log(`Tabla del ${ base } hasta el ${ hasta }  `.rainbow); 
            console.log(`===============================================`.rainbow);
        }
       
        let salida=``;
        for (i=1; i<=hasta;i++){
            salida +=( `${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`);
        }
        
        if (listar) console.log(salida);

        fs.writeFileSync (`./salida/tabla-${base}.txt`,salida);
        return (`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }
}

module.exports={
    crearTabla
}