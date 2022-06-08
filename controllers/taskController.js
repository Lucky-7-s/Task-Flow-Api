const express = require('express');
const Task = require('../models/taskSchema');

const router = express.Router();

// GET all tasks
router.get('/', function (req, res) {
    Task.find()
        .populate('user', ['username'])
        .then((tasks) => res.status(200).json({ tasks: tasks }))
});

// POST create new task
router.post('/', function (req, res) {
    const data = req.body;

    Task.create(data)
        .then((user) => res.status(201).json({
            user: user
        }));
});

module.exports = router;