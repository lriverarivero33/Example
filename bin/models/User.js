//mongoose permite administrar la base de datos mongodb
const mongoose = require("mongoose");
//se obtiene la libreria de squemas de mongoose
const Schema = mongoose.Schema;
//se crea un esquema con base a los datos del modelo
const UserSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
})
//se crea el modelo User a partir del esquema UserSchema
var User = mongoose.model("User", UserSchema);
//se exporta el modelo user para ser utilizado por el controllador(controller)
module.exports =  User;