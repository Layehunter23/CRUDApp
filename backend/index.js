const express = require('express')
const mongoose = require('mongoose')
const PatientModel = require('./models/Patients')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(5001,() => {
    console.log('Server is running on PORT 5001')
})

mongoose.connect("mongodb://127.0.0.1:27017/Patients")

app.post("/createPatient",(req,res) => {
    PatientModel.create(req.body)
    .then(patients => res.json(patients))
    .catch(err => res.json(err))

})