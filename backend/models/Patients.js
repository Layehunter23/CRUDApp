const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number
})

const PatientModel = mongoose.model("Patients",UserSchema)
module.exports = PatientModel