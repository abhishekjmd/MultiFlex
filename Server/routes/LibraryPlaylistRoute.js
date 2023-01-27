const express = require('express')
const Router = express.Router()
const { createLibraryPlaylist, pushMoviesToLibraryPlaylist, getLibrary, deleteLibraryPlaylist, pullMoviesFromLibraryPlaylist } = require('../controllers/LibraryPlaylistControllers')

Router.post('/addLibrary', createLibraryPlaylist);
Router.put('/updateLibrary/:id', pushMoviesToLibraryPlaylist);
Router.put('/updateLibrary/:id/movies/:id', pullMoviesFromLibraryPlaylist);
Router.delete('/deleteLibrary/:id', deleteLibraryPlaylist);
Router.get('/getLibrary', getLibrary);

module.exports = Router