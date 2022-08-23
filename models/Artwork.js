const mongoose = require("mongoose")
const Schema = mongoose.Schema

const artworkSchema = new Schema({
    Url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Artwork", artworkSchema)