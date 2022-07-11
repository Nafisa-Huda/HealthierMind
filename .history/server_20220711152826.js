const express = require('express')
const app = express() 
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config() 

// let db, 
//     dbConnectionString = process.env.DB_STRING, //grabbing variable from env file
//     dbName = //add db name here
//     collection


// MongoClient.connect(dbConnectionString) 
//     .then(client => {
//         console.log('Connected to Database')
//         db = client.db(dbName)
//         collection = db.collection('#') //add collection of db name 
//     })

// app.set('view engine', 'ejs') 
// app.use(express.static('public')) 
// app.use(express.urlencoded({extended:true})) //middleware 
// app.use(express.json()) 
// app.use(cors())

// app.get('/', async(req, res) => {
//     try {
//         res.render('index.ejs') //ejs uses render instead of sendFile
//     } catch (error) {
//         res.status(500).send({message: error.message})
//     }


// })

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on port') 
}) 
