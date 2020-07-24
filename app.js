const express=require('express');
const app=express();

app.listen(3030,()=>{console.log('Server running in 3030 port')});
// Requiero las rutas
const rutaHome=require('./routes/home');
const rutaSucursales=require('./routes/sucursales');
const rutaMarcas=require('./routes/marcas');
const rutaAutos=require('./routes/autos');
// Uso las rutas
app.use('/',rutaHome);
app.use('/sucursales',rutaSucursales);
app.use('/marcas',rutaMarcas);
app.use('/autos',rutaAutos);

app.get('*', (req, res) => {
	res.status(404).write('404 <br> Page not found');
	res.end()
});
