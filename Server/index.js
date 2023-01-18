require('./config/db')
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser');
const movieRoute = require('./routes/moviesRoute')
const topPlaylistRoute = require('./routes/topPlaylistRoute')
const artistRoute = require('./routes/artistRoute')
require('dotenv').config();
// const fileUpload = require('express-fileupload')
// app.use(fileUpload({
// useTempFiles: true
// }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/multiflex', movieRoute);
app.use('/api/Top_playlist', topPlaylistRoute);
app.use('/api/artist', artistRoute)
// app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))