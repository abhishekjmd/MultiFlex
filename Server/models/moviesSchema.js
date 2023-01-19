const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    index: { type: Number },
    Preview_url: { type: String, required: true },
    image: { type: String, required: true },
    singer: { type: String, required: true },

})


const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie

