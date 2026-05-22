const express = require('express')
const mongoose = require('mongoose')
const PatientModel = require('./models/Patients')
const UserModel = require('./models/Users')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(5001,() => {
    console.log('Server is running on PORT 5001')
})

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_APP")

app.post("/createPatient",(req,res) => {
    PatientModel.create(req.body)
    .then(patients => res.json(patients))
    .catch(err => res.json(err))

})

app.post("/createUser",(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})