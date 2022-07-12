//vinculamos la variable app que contiene toda la configuracion de las rutas desde routes
var { app } = require("./bin/routes");
//montamos el servidor en el puerto 3000
app.listen(3000, ()=>{
    console.log('Online!')
})