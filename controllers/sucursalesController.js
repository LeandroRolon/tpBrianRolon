const concesionaria=require('../dbConcesionarias');

module.exports= sucursales={
    index:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        
        res.write('NUESTRAS SUCURSALES SON: \n========================\n\n');
        concesionaria.forEach(dato=>{
            res.write(`→Sucursal: ${dato.sucursal}\n\n`);
            res.write(`  *Dirección: ${dato.direccion}\n`);
            res.write(`  *Teléfono: ${dato.telefono}\n\n\n`);
        });
        res.end();
    },
    sucursal:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('====================\nConcesionaria Formar \n====================\n\n\n\n')
        let idSucursal= req.params.sucursal;
        let datoSucursal;
        
        concesionaria.forEach(local=>{
            
            if(idSucursal==local.sucursal.toLowerCase()||idSucursal==local.sucursal){
                    datoSucursal=local.sucursal;
                    res.write(`→Sucursal: ${local.sucursal}\n\n`);
                    res.write(`   *Dirección: ${local.direccion}\n`);
                    res.write(`   *Teléfono: ${local.telefono}\n\n\n`);
                    res.write(' -----------------\n Autos disponibles \n -----------------\n\n\n')
                    for(auto of local.autos){
                        res.write(` Marca: ${auto.marca}\n Modelo: ${auto.modelo}\n Año: ${auto.anio}\n Color: ${auto.color}\n\n`);
                    }
                    res.write(`-------------------\nTotal de autos: ${local.autos.length}\n-------------------`);      
            }
        });
        if(datoSucursal===undefined){
            res.write('¡Error! Sucursal no encontrada')
        }
        res.end();
    },
};