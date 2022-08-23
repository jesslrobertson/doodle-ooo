const express = require("express")
const galleryRouter = express.Router()
const Artwork = require("../models/Artwork")

galleryRouter.get("/", (req, res, next) => {
    Artwork.find((err, items) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})


galleryRouter.post('/', (req, res, next) => {
    const newArt = new Artwork(req.body)
    newArt.save((err, savedArtwork) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedArtwork)
    })
})


module.exports = galleryRouter

