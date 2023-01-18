const express = require('express');
const Movie = require('../models/moviesSchema');
const Router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
cloudinary.config({
    cloud_name: 'dwhra8mlv',
    api_key: '848551776249758',
    api_secret: 'K6KPHwaeYjHH5H0drQutBQJYv6E',
});

const upload = multer({ dest: 'upload/' });



// ----------------- POST API ENDPOINTS ------------------------

Router.post('/api/add_movies', async (req, res) => {
    try {
        const addMovies = new Movie({
            name: req.body.name,
            Preview_url: req.body.Preview_url,
            image: req.body.image,
            singer: req.body.singer
        })
        await addMovies.save();
        console.log(addMovies)
        res.status(201).send(addMovies);
        return;
        // res.send('added data')
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})





{/* 
Router.post('/api/add_movies',
//  upload.fields([{ name: 'image' }, { name: 'video' }]),
async (req, res) => {
    // console.log(req.body);
    // const image = req.files.image[0];
    // const video = req.files.video[0];
    try {
        // const imageResult = await cloudinary.uploader.upload(image.path);
        // console.log(imageResult);
        // const videoResult = await cloudinary.uploader.upload(video.path, { resource_type: 'video' });
        // console.log(videoResult);
        // Preview_url: videoResult.url,
        // image: imageResult.url,
        const movie = new Movie({
            Name: req.body.Name,
            Preview_url: req.body.Preview_url,
            image: req.body.image,
            singer: req.body.singer
        });
        movie.save()
        res.send('Image and Video upload successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
    
})
*/}


// --------------- TRENDING MOVIE POST ROUTE --------


// ----------------- GET API ENDPOINTS ------------------------
Router.get('/api/movies', async (req, res) => {
    try {
        const getMovies = await Movie.find({});
        // const result = res.json(getMovies);
        console.log(getMovies);
        res.send(getMovies);
        return;
    } catch (error) {
        res.send(error);
        console.log(error)
    }
})


// ----------------- GET PARTICULAR API ENDPOINTS ------------------------
Router.get('/api/movies/:name', async (req, res) => {
    try {
        // const name = req.params.name;
        const getParticularMovies = await Movie.findOne({ name: req.params.name });
        // const result = await res.json(getParticularMovies);
        console.log(getParticularMovies);
        res.send(getParticularMovies);
        return;
    } catch (error) {
        res.status(400).json(error);
        console.log(error)
        // res.send(error)
    }
})


// ----------------- DELETE API ENDPOINTS ------------------------
Router.delete('/api/movies/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deleteMovie = await Movie.findByIdAndDelete(id)
       console.log(deleteMovie);
        res.send(deleteMovie);
    } catch (error) {
        // res.send(error)
        console.log(error)
    }
})

module.exports = Router;