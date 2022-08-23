const express = require('express')
const artRouter = express.Router()
const Art = require('../models/Art')

//Routes

//GET all
artRouter.get("/", (req, res, next) => {
  Art.find((err, items) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(items)
  })
})

//POST one
artRouter.post('/', (req, res, next) => {
  const newArt = new Art(req.body)
  newArt.save((err, savedArt) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedInventory)
  })
})


module.exports = artRouter