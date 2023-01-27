const libraryPlaylist = require("../models/LibrarySchema");

exports.createLibraryPlaylist = async (req, res) => {
    try {
        const createPlaylist = await new libraryPlaylist({
            name: req.body.name,
            movies: []
        })
        createPlaylist.save()
        res.send(createPlaylist)
        console.log(createPlaylist)
        return;
    } catch (error) {
        res.send(error)
        console.log(error);
    }
}

// const pushMovies = await libraryPlaylist.findByIdAndUpdate(req.params.id, { $push: { movies: req.body.movieId } }, { new: true }).populate('movies')
exports.pushMoviesToLibraryPlaylist = async (req, res) => {
    try {
        const pushMovies = await libraryPlaylist.findOneAndUpdate({ _id: req.params.id }, { $push: { movies: req.body.movieId } }, { new: true }).populate('movies')
        res.send(pushMovies);
        console.log(pushMovies);
        return;
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

exports.pullMoviesFromLibraryPlaylist = async (req, res) => {
    try {
        const pullMovies = await libraryPlaylist.findOneAndUpdate({ _id: req.params.id }, { $pull: { movies: { _id: req.params.id } } }, { new: true }).populate('movies')
        res.send(pullMovies);
        console.log(pullMovies)
        return;
    } catch (error) {
        res.send(error);
        console.log(error)
    }
}

exports.deleteLibraryPlaylist = async (req, res) => {
    try {
        const id = req.params.id
        const deleteLibrary = await libraryPlaylist.findByIdAndDelete(id)
        res.send(deleteLibrary);
        console.log(deleteLibrary);
        return;
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.getLibrary = async (req, res) => {
    try {
        const getLibraryPlaylist = await libraryPlaylist.find().populate('movies').exec();
        res.send(getLibraryPlaylist);
        console.log(getLibraryPlaylist);
        return;
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}