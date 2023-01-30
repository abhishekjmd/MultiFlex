require('./config/db')
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const movieRoute = require('./routes/moviesRoute')
const topPlaylistRoute = require('./routes/topPlaylistRoute')
const artistRoute = require('./routes/artistRoute')
const libraryPlaylistRoute = require('./routes/LibraryPlaylistRoute')
const userRoute = require('./routes/userRoute')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/multiflex', movieRoute);
app.use('/playlist', topPlaylistRoute);
app.use('/artist', artistRoute);
app.use('/library', libraryPlaylistRoute);
app.use('/user', userRoute);
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
module.exports = app
