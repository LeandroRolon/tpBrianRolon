const concesionaria = require('../dbConcesionarias');
// const { text } = require('express');

let home= {
    
    index:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('BIENVENIDOS A CONCESIONARIO FORMAR\n\n\n\n');
        res.write('Nuestras sucursales disponibles son: \n\n\n\n\n\n')
        concesionaria.forEach(dato=>{
            res.write(`→ ${dato.sucursal}\n\n\n`);
        })
        res.end();
    },
}
module.exports=home