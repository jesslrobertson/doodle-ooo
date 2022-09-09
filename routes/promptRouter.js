const express = require("express");
const promptRouter = express.Router();
const Prompt = require("../models/Prompt");

//add prompts to database
// Prompt.insertMany(
//   [
//     //paste array of json prompt objects here
// ]
// ).then(function(){
//   console.log("Data inserted")  // Success
// }).catch(function(error){
//   console.log(error)      // Failure
// });

promptRouter.get("/", (req, res, next) => {
  Prompt.find((err, items) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    const count = items.length;
    const randomItem = Math.floor(Math.random() * count);
    return res.status(200).send(items[randomItem]);
  });
});

module.exports = promptRouter;
