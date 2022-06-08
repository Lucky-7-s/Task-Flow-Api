const express = require('express');
const User = require('../models/userSchema');

const router = express.Router();

// GET all users
router.get('/', function (req, res) {
    User.find()
        .populate('tasks', ['tasks', 'status'])
        .then((users) => res.status(200).json({ user: users }))
});

// POST create new username
router.post('/', function (req, res) {
    User.create(req.body).then((user) => {
        res.status(201).json({ user: user })
    });
});

module.exports = router;