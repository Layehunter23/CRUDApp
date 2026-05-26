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
.then(console.log('MongoDB Connecte'))
.catch(err => console.log(err) )

app.post("/createPatient",(req,res) => {
    PatientModel.create(req.body)
    .then(patients => res.json(patients))
    .catch(err => res.json(err))

})

app.get('/patientList',(req,res) => {
    PatientModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser",(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.delete("/deletePatient/:id",(req,res) => {
    const id = req.params.id;
    PatientModel.findByIdAndDelete({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}) 

app.get('/getPatient/:id',(req,res) => {
    const id = req.params.id
    PatientModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/UpdatePatient/:id',(req,res) =>
{
    const id = req.params.id
    PatientModel.findByIdAndUpdate({_id:id},{name : req.body.name, lastName : req.body.lastName , age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})