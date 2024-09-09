const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { tokenAuth, mentorAuth, menteeAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/register', async(req, res) => {
    const {
        name,
        email,
        password,
        role,
        bio,
        expertise,
        yearsOfExperience,
        calendlyLink,
        interestedIn,
    } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password,
            role,
            bio,
            expertise,
            yearsOfExperience,
            calendlyLink,
            interestedIn,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            'secret', { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, uid: user._id });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            'secret', { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});




router.get("/:uid", tokenAuth, async(req, res) => {
    const { uid } = req.params;

    if (!uid)
        return res.status(400).json({ message: "User ID is required!" });

    try {
        const user = await User.findById(uid);
        if (!user) {
            return res.status(404).json({ message: "User Not Found!" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error); // Log error for debugging
        return res.status(500).json({ message: "Internal Server Error!" });
    }
});


module.exports = router;