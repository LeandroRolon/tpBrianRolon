const fs= require('fs');
// let lectorJSON = fs.readFileSync('./data/concesionarias.json','utf-8');
let concesionaria= JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));


module.exports= concesionaria;