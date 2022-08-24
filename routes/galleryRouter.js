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
    console.log(newArt)
    newArt.save((err, savedArtwork) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedArtwork)
    })
})

galleryRouter.delete("/:artId", (req, res, next) => {
    Artwork.findOneAndDelete({_id: req.params.artId}, (err, item) => {
        console.log(`Request body is ${req.body}`)
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${item._id} from the database`)
    })
})


module.exports = galleryRouter

