const express = require('express');
const Router = express.Router();
const { registerUser, sendOtp, verifyOtp, allUsers, deleteUser } = require('../controllers/UserController');
const { check, validationResult } = require('express-validator')

Router.post('/register', [[check('email', 'Please include a valid email').isEmail(), check('password', 'Password is required').exists()]], registerUser);
Router.post('/login', sendOtp);
Router.post('/verify-otp', verifyOtp);
Router.get('/allUsers', allUsers);
Router.delete('/deleteUser/:id', deleteUser)

module.exports = Router
