const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Art blueprint

const artSchema = new Schema ({
  user: {
    type: String
  },
  dataURL: {
    type: String,
    required: true
  }
})



module.exports = mongoose.model("Art", artSchema)