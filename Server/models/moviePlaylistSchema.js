const mongoose = require('mongoose');
const { Schema } = mongoose;
const moviePlaylistSchema = new mongoose.Schema({
    name: { type: String },
    coverImage: { type: String },
    movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }]

})

const TopPlaylist = mongoose.model('TopPlaylist', moviePlaylistSchema);
module.exports = TopPlaylist
