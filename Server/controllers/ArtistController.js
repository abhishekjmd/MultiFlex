const Artist = require("../models/ArtistSchema")

exports.postArtist = async (req, res) => {
    try {
        const createArtist = await new Artist({
            ArtistName: req.body.ArtistName,
            ProfileImage: req.body.ProfileImage,
            Tracks: []
        })
        await res.send(createArtist);
        console.log(createArtist)
        return;
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

exports.getArtist = async (req, res) => {
    try {
        const getArtist = await Artist.find({});
        res.send(getArtist);
        console.log(getArtist)
        return;
    } catch (error) {
        console.log(error)
    }
}

exports.addTracksToArtist = async (req, res) => {
    try {
        const addUpdateTracks = await Artist.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true }.populate('Tracks'))
        res.send(addUpdateTracks);
        console.log(addUpdateTracks)

    } catch (error) {
        console.log(error);
        res.send(error)
    }
}