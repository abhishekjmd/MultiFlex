const mongoose = require('mongoose')
const { Schema } = mongoose;
const libraryPlaylistSchema = new mongoose.Schema({
    name: { type: String },
    movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }]

})

const libraryPlaylist = mongoose.model('libraryPlaylist', libraryPlaylistSchema)
module.exports = libraryPlaylist