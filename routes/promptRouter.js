const express = require('express')
const promptRouter = express.Router()
const Prompt = require('../models/Prompt')
const mongoose = require('mongoose')

//add prompts to database
Prompt.insertMany(
  [
    //paste array of json prompt objects here
]
).then(function(){
  console.log("Data inserted")  // Success
}).catch(function(error){
  console.log(error)      // Failure
});


//remove duplicates



module.exports = promptRouter