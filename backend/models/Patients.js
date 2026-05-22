const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number
})

const PatientModel = mongoose.model("Patients",PatientSchema,"Patients")
module.exports = PatientModel