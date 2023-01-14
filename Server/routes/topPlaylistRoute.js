const express = require('express');
const Router = express.Router();
const { postMovie, getAllMovie, postTopPlaylist, getTopPlaylists, pushMovieDataToTopPlaylist, deleteTopPLaylistMoviesData, deleteTopPlaylist } = require('../controllers/TopPlaylistController');


// ------------ adding and getting playlist api -----
Router.post('/addTopPlaylist', postTopPlaylist);
Router.get('/getTopPlaylist', getTopPlaylists)
Router.put('/updateTopPlaylistMovie/:id', pushMovieDataToTopPlaylist)
Router.delete('/deleteTopPlaylistMovie/:id', deleteTopPLaylistMoviesData)
Router.delete('/deleteTopPlaylist/:id',deleteTopPlaylist)
module.exports = Router;