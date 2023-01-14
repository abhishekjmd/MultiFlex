const mongoose = require('mongoose');

const TrendingMoviesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    // rating: { type: Number, default:0 },
    Preview_url: { type: String, required: true },
    singer: { type: String, required: true },

})

const RatingSchema = new mongoose.Schema({
    rating: {
        movieid: { type: mongoose.SchemaTypes.ObjectId, ref:'Movie'}      
    }
})

const TrendingMovies = mongoose.model('TrendingMovies', TrendingMoviesSchema);
const Rating = mongoose.model('Rating', RatingSchema);

module.exports = { TrendingMovies, Rating };