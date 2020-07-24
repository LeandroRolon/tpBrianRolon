const concesionaria=require('../dbConcesionarias');

module.exports=autos={
    index:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('====================\n Nuestros Vehiculos \n====================\n\n')
        let totalAutos=[];
        concesionaria.forEach(automotores=>{
            
            for(arrAutos of automotores.autos){
                totalAutos.push(arrAutos);
                res.write(`→Marca:${arrAutos.marca}  -  Modelo: ${arrAutos.modelo}  -  Año: ${arrAutos.anio}  -  Color: ${arrAutos.color} \n`);
            }
        });
        let total=totalAutos.length;
        res.write(`\n===============================\n║Total de autos encontrados: ${total}║\n===============================`)
        res.end();
    },
    marcaAuto:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('====================\nConcesionaria Formar \n====================\n\n\n\n')
        idMarca=req.params.marca;
        let paraElError;
        let totalAutos=[];
        
        
            concesionaria.forEach(dato=>{
                for(datosMarca of dato.autos){
                    if(idMarca==datosMarca.marca){
                        paraElError = datosMarca.marca;
                        res.write(`→Marca: ${datosMarca.marca}  -  Modelo: ${datosMarca.modelo}  -  Año: ${datosMarca.anio}  -  Color: ${datosMarca.color}  -  Sucursal:  ${dato.sucursal}\n`);
                        totalAutos.push(datosMarca.modelo);
                    };
                };
            });
            
            if(paraElError==undefined){
                res.write('   ¡¡ERROR!!\n Page not found')
            }else{
                let total= totalAutos.length;
            res.write(`\n===============================\n║Total de autos encontrados: ${total}║\n===============================`)
            }
            
        
        res.end();
    },
    datoAuto:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('====================\nConcesionaria Formar \n====================\n\n\n\n')
        
        idAutoMarca=req.params.marca;
        datoVehiculo=req.params.dato;
        
        let totalAutos=[];
        let porError;
        
        
        
            concesionaria.forEach(dato=>{
                for(datosMarca of dato.autos){
                    if(idAutoMarca==datosMarca.marca&&(datoVehiculo==datosMarca.anio||datoVehiculo==datosMarca.color)){
                        porError= datoVehiculo==datosMarca.anio||datoVehiculo==datosMarca.color;
                        res.write(`→Marca: ${datosMarca.marca}  -  Modelo: ${datosMarca.modelo}  -  Año: ${datosMarca.anio}  -  Color: ${datosMarca.color}  -  Sucursal:  ${dato.sucursal}\n`);
                        totalAutos.push(datosMarca.modelo);
                    };
                };
        });
        if(porError==undefined){
            res.write(` ¡¡Error!!\n Page not found`);
    }else{
        let total= totalAutos.length;
            res.write(`\n===============================\n║Total de autos encontrados: ${total}║\n===============================`)
    }    
    res.end();
    
    },

}
