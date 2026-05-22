const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    prenom: String,
    nom:String,
    email:String,
    password:String

})

const UserModel = mongoose.model('Users',UserSchema,"Users")
module.exports = UserModel
