const express = require('express');
const Task = require('../models/taskSchema');

const router = express.Router();

// GET all tasks
router.get('/', function (req, res) {
    Task.find()
        .populate('user', ['username'])
        .then((tasks) => res.status(200).json({ tasks: tasks }))
});

module.exports = router;