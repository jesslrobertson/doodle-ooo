const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Prompt blueprint

const promptSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Prompt", promptSchema)