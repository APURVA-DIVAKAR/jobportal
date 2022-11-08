
const express = require('express')
const JobModel = require('./Model/Job')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(cors()) 
app.use(express.json()) 

app.use(express.urlencoded({ extended: true }))

// console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/',(req,res)=>res.send(`hello`))


app.get("/api/jobs",async(req, res)=>{
    const jobs = await JobModel.find({})
    res.send(jobs);
})





const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))

app.listen(process.env.PORT, () => {
    console.log("The API is Working.")
})