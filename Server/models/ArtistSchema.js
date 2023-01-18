const mongoose = require('mongoose');
const { Schema } = mongoose;
const ArtistSchema = new mongoose.Schema({
    ArtistName: { type: String, required: true },
    ProfileImage: { type: String, required: true },
    Tracks: [{ type: Schema.Types.ObjectId, ref: "Movie" }]
})

const Artist = mongoose.model('Artist', ArtistSchema)
module.exports = Artist