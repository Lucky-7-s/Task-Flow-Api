const express = require('express');
const User = require('../models/userSchema');
const Task = require('../models/taskSchema');

const router = express.Router();

// GET all users
router.get('/', function (req, res) {
    User.find()
        .populate('tasks', ['tasks', 'status'])
        .then((users) => res.status(200).json({ user: users }))
});

// GET user by username
router.get('/:user', function (req, res) {
    User.find({ username: req.params.user })
        .populate('tasks', ['task', 'status'])
        .then((user) => res.status(200).json({ user: user }))
});

// POST create new username
router.post('/', function (req, res) {
    User.create(req.body).then((user) => {
        res.status(201).json({ user: user })
    });
});

// DELETE user by username
router.delete('/username/:user', function (req, res) {
    User.findOneAndDelete({ username: req.params.user })
        .then((user) => res.status(200).json({ user: user }));
});

router.patch('/:userId/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.params.userId;
    const status = req.body.status;

	Task.findByIdAndUpdate(taskId, {
        user: userId,
        status: status
    }, { new: true }
    ).then(() => {
        User.findByIdAndUpdate(userId, {
            $push: { tasks: taskId }
        }, {
            new: true
        })
        .populate('tasks', ['task', 'status'])
        .then((user) => res.status(200).json({ user: user }))
    })
});

module.exports = router;