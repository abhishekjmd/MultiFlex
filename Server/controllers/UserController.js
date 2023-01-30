const User = require('../models/userSchema')
const { check, validationResult } = require('express-validator')
const twilio = require('twilio')

const accountSid = 'AC6e0a9243f6cbf3508a7e564144dc7c63';
const authToken = '3263ed4635132d524ec29849ae66d1d0';
const twilioPhoneNumber = '+16084969810';
const client = new twilio(accountSid, authToken);

// Generate OTP function
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000)
}


exports.registerUser =
    [check('email', 'Please include a valid email').isEmail(), check('password', 'Password is required').exists()]
    ,
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { name, email, password, confirmPassword, phone } = req.body

            if (password != confirmPassword) {
                res.json({ message: 'password do not match' })
            }

            const user = await User.findOne({ email, phone });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' })
            }

            else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    confirmPassword: req.body.confirmPassword,
                    phone: req.body.phone
                })
                await newUser.save()
                console.log(newUser);
                res.send(newUser);
                return;
            }
        } catch (error) {
            console.log(error)
            res.send(error);
        }
    }




exports.sendOtp = async (req, res) => {
    try {
        const phone = req.body.phone
        // Find the user with the provided phone number
        const registeredUser = await User.findOne({ phone })
        if (!registeredUser) {
            return res.status(404).json({ msg: 'No account found create one' })
        }

        // Generate the OTP
        const verificationCode = generateOtp();

        // Update the user's document with the OTP
        registeredUser.verificationCode = verificationCode;
        await registeredUser.save();

        // Send the OTP via SMS
        client.messages.create({
            to: phone,
            from: twilioPhoneNumber,
            body: `Welcome to the MultiFlex app! please enter the OTP code  ${verificationCode}. Thank you for using MultiFlex!`
        })
            .then(message => console.log(message.sid))
            .catch(err => console.log(err));
        res.json({ msg: 'OTP sent' });

    } catch (error) {
        console.log(error);
        res.status(500).send('OTP not send');
    }
}


exports.verifyOtp = async (req, res) => {
    try {
        const phone = req.body.phone
        const verificationCode = req.body.verificationCode

        // Find the user with the provided phone number
        const user = await User.findOne({ phone });
        if (!user) {
            res.send('User do not exist create one')
        }
        // Check if the provided OTP matches the one in the user's document

        if (user.verificationCode !== verificationCode) {
            return res.status(400).json({ msg: 'Invalid verification code' });
        }
        // Update the user's document to indicate the phone number has been verified
        user.isVerified = true;
        user.verificationCode = null;
        await user.save();
        // Return a response indicating the phone number has been verified
        res.json({ msg: 'Phone number verified' });
        return;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.allUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        console.log(allUsers);
        res.send(allUsers);
        return;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id);
        deleteUser.save();
        console.log(deleteUser);
        res.send(deleteUser);
        return;
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
