//requerimos las biblotecas express para las rutas, bodyParser para loenvios por post de JSON
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
//midware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
//llamamos el controlador que se encarga de gestionar la base de datos
const { controller } =
    require("./Controller");

//creamos la ruta raiz para enviar un mensaje de bienvenida con la version
app.get("/version", (req, res) => {
    //retornamos un mensaje
    res.send({ version: "1.0.0" });
});

//Routes for user
//Agregar a un usuario
app.post("/users", function(req, res) {
    let { user } = req.body;
    controller.setUser(user, res);
});

//creamos la ruta users que deberá traer todos los usuarios
app.get("/users", (req, res) => {
    //llamamos el metodo getUser del objeto controller, este se encarga de buscar todos los usuarios
    //recibe por parametros req que es igual a la consulta request(consulta) y el res que equivale al response(respuesta)
    controller.getUsers(req, res);
});

//Traer a un usuario por su id
app.get("/users/:id", function(req, res) {
    let { id } = req.params;
    controller.getUser(id, res);
});

//Actualizar a un usuario por su id
app.put("/users/:id", function(req, res) {
    let user = req.body.user;
    user.id = req.params.id;
    controller.updateUser(user, res);
});

//Eliminar a un usuario por su id
app.delete("/users/:id", function(req, res) {
    let { id } = req.params;
    controller.deleteUser(id, res);
});

//Routes for list
//Agregar una lista de usuario
app.post("/users/:user_id/lists", (req, res) => {
    let { user_id } = req.params;
    let { list } = req.body;
    controller.setUserList(user_id, list, res);
});

//Traer las listas de un usuario
app.get("/users/:id/lists", function(req, res) {
    let { id } = req.params;
    controller.getUserLists(id, res);
});

//Traer una lista específica de un usuario
app.get("/users/:user_id/lists/:list_id", (req, res) => {
    let { user_id, list_id } = req.params;
    controller.getUserList(user_id, list_id, res);
});

//Routes for song
//Guardar una cancion
app.post("/songs", (req, res) => {
    let { song } = req.body;
    controller.setSong(song, res);
});

//traer todas las canciones
app.get("/songs", (req, res) => {
    controller.getSongs(res);
});

//traer una cancion
app.get("/songs/:id", (req, res) => {
    let { id } = req.params;
    controller.getSong(id, res);
});

//Actualizar una lista con canciones
app.put("/users/:id_user/lists/:id_list/", function(req, res) {
    let { song_id } = req.body;
    let { id_user, id_list } = req.params;
    controller.updateList(song_id, id_user, id_list, res);
});

//Routes for Docenta
//Agregar un Docenta
app.post("/Docents/", (req, res) => {
    let { Docent } = req.body;
    controller.setDocent(Docent, res);
});

// Traer todos los Docentas
app.get("/Docents/", (req, res) => {
    controller.getDocents(res);
});

//traer un Docenta por su id
app.get("/Docents/:id", (req, res) => {
    let { id } = req.params;
    controller.getDocent(id, res);
});

//Actualizar canciones con Docentas
app.put("/songs/:id_song/", function(req, res) {
    let { id_song } = req.params;
    let { Docents } = req.body;
    controller.updateSong(id_song, Docents, res);
});
//exportamos la constante app con toda la configuracion de las rutas
exports.app = app;
