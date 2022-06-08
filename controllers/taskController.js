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

// DELETE task by id
router.delete('/task/:id', function (req, res) {
    const id = req.params.id;

    Task.findByIdAndDelete(id)
        .then(() => res.sendStatus(204));
});

// PATCH update task by id
router.patch('/task/:id', function (req, res) {
    const id = req.params.id;
    const data = req.body;

    Task.findByIdAndUpdate(id, data, { new: true })
        .then((task) => res.status(200).json({ task: task }))
});

module.exports = router;