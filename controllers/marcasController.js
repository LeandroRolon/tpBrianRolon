const concesionaria=require('../dbConcesionarias');

    
module.exports=homeMarcas={
    index:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.write(`===================\nMarcas disponibles\n===================\n\n\n\n`);
        let arrMarcas=[]
        marcasSinRepetir=[]
        concesionaria.forEach(dato=>{
            for(datosMarca of dato.autos){
                arrMarcas.push(datosMarca.marca);
            };
        });
        for(marcas of arrMarcas){
            if(marcasSinRepetir.indexOf(marcas)==-1){
                marcasSinRepetir.push(marcas);
            };
        };
        for(marca of marcasSinRepetir){
            res.write(`→ ${marca}\n\n`)
        }
        res.write(`\n\n===============================\n Total de marcas encontradas: ${marcasSinRepetir.length}\n===============================`)

         res.end()
    },
    infoMarcas:(req,res)=>{
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf-8' });
        idMarca=req.params.marca;
        res.write(`---------------------\n  →Marca: ${idMarca}\n---------------------\n\n`)
        
        let totalAutos=[];
        concesionaria.forEach(dato=>{
            for(datosMarca of dato.autos){
                if(idMarca==datosMarca.marca){
                    res.write(`  *Modelo: ${datosMarca.modelo}\n  *Año: ${datosMarca.anio}\n\n`);
                    // res.write(`total: ${datosMarca.marca.length}`)
                    totalAutos.push(datosMarca.modelo);
                    
                }
                
            }
            
        })
        let total= totalAutos.length;
        res.write(`===============================\n║Total de autos encontrados: ${total}║\n===============================`)
        
        
        res.end();
    }
}
