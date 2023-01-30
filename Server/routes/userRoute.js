const express = require('express');
const { registerUser, sendOtp, verifyOtp, allUsers, deleteUser } = require('../controllers/UserController');
const Router = express.Router();

Router.post('/register', registerUser);
Router.post('/signin', sendOtp);
Router.post('verify-otp', verifyOtp);
Router.get('allUsers', allUsers);
Router.delete('/deleteUser/:id', deleteUser)

module.exports = Router
