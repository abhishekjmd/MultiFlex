require('./config/db')
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const movieRoute = require('./routes/moviesRoute')
const bodyParser = require('body-parser');
 require('dotenv').config();
// const fileUpload = require('express-fileupload')
// app.use(fileUpload({
    // useTempFiles: true
// }))

app.use('/multiflex', movieRoute);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))