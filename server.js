require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


dotenv.config()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect to database

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dc6tcnp.mongodb.net/doodle-ooo?retryWrites=true&w=majority`, (x) => console.log(x))

//routes
app.use('/artwork', require('./routes/artRouter'))
app.use('/prompts', require ('./routes/promptRouter'))

//error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})
  

//listen
app.listen(9000, () => {
  console.log('The server is running on port 9000')
})