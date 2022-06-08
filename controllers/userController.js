const express = require('express');
const User = require('../models/userSchema');

const router = express.Router();

// GET all users
router.get('/', function (req, res) {
    User.find()
        .populate('tasks', ['tasks', 'status'])
        .then((users) => res.status(200).json({ user: users }))
});

module.exports = router;