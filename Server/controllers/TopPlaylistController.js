const TopPlaylist = require('../models/moviePlaylistSchema');


// ---------------- POST TOP PLAYLIST API -----
exports.postTopPlaylist = async (req, res) => {
    try {
        const postTopPlaylist = new TopPlaylist({
            name: req.body.name,
            coverImage: req.body.coverImage,
            movies: []
        })
        postTopPlaylist.save();
        res.send(postTopPlaylist)
        console.log(postTopPlaylist);
        return;
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

// ---------------- Push TopPLAYLIST API -----
exports.pushMovieDataToTopPlaylist = async (req, res) => {
    try {
        const doc = await TopPlaylist.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true }).populate('movies');
        res.send(doc);
        console.log(doc);
        return;
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.deleteTopPLaylistMoviesData = async (req, res) => {
    try {
        const delData = await TopPlaylist.findOneAndUpdate({ _id: req.params.id }, { $pull: req.body }, { new: true })
        console.log(delData);
        res.send(delData)
        return;
    } catch (error) {
        res.send(error);
        console.log(error)
    }
}

exports.deleteTopPlaylist = async (req, res) => {
    try {
        const id = req.params.id
        const delPlaylist = await TopPlaylist.findByIdAndDelete(id)
        // delPlaylist.save();
        res.send(delPlaylist)
        console.log(delPlaylist);
        return;
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}


// ---------------- Get TOP PLAYLIST API -----
exports.getTopPlaylists = async (req, res) => {
    try {
        const getTopPlaylist = await TopPlaylist.find().populate('movies').exec();
        console.log(getTopPlaylist);
        res.send(getTopPlaylist);
        return;
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

