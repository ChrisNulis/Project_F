/*============ DEPENDENCIES =============*/

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

/*============ CONFIGURATION =============*/

const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


/*============= MIDDLEWARE ==============*/

//Use this middleware to return JSON data, rather than res.send/urlencoded which returns HTML:
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
const venuesController = require('./controllers/venues_controller.js')
app.use('/', venuesController)

// app.get('/', (req, res) =>{
//    res.send('hello wold')
// })

/*============== LISTENER ================*/
app.listen (PORT, ()=>{
   console.log('listening on port' + PORT);
})

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})


/*============ MONGOOSE ERR/SUCCESS =============*/

mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
