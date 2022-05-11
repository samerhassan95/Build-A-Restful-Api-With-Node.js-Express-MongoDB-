const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
require ('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')


//middlewares
app.use(cors())
app.use(bodyParser.json())

//import routes
const postRoute = require('./routes/posts')
app.use('/posts',postRoute)

//routes
app.get('/',(req,res)=>{
    res.send('we are in home')
})


//connect to db
mongoose.connect(process.env.DB_CONNECTION,
()=>console.log('connected to db'))
//port listening
app.listen(3000)