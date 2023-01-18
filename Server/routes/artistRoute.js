const express = require('express');
const { getArtist, addTracksToArtist, postArtist } = require('../controllers/ArtistController');
const Router = express.Router();

Router.get('/getArtist', getArtist);
Router.post('/addArtist', postArtist);
Router.put('/updateArtist', addTracksToArtist);

module.exports = Router