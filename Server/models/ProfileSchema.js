const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    ProfileImage: { type: String },
    UserName: { type: String }
})

const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = Profile