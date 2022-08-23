const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/artstudio", () => console.log('connected to database'))
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dc6tcnp.mongodb.net/doodle-ooo?retryWrites=true&w=majority`, (x) => console.log(x))


app.use("/gallery", require("./routes/galleryRouter"))



app.use((err, req, res, next) => {
    return res.send({ errMsg: err.message })
})

app.listen("8000", () => {
    console.log("The server is running on port 8000")
})