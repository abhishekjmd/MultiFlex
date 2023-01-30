const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function (next) {
    let user = this;
    if (!user.isModified('password') || !user.isModified('confirmPassword')) return next();
    try {
        user.password = await bcrypt.hash(user.password, 10);
        user.confirmPassword = await bcrypt.hash(user.confirmPassword, 10);
        next();
    } catch (err) {
        return next(err);
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User