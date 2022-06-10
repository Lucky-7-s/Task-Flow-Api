const express = require('express');
const User = require('../models/userSchema');
const Task = require('../models/taskSchema');

const router = express.Router();

// GET all users
router.get('/', function (req, res) {
    User.find({}).then((authors) => {
        res.json(authors);
    });
});

// GET user by username
router.get('/:username', function (req, res) {
    User.find({ username: req.params.username }).then((users) => {
        res.json(users);
    });
});

// POST - create a new username
router.post('/', function (req, res) {
    const data = req.body;

    User.create(data).then((user) => {
        res.json(user);
        console.log(user)
    });
});

// POST - add a task to task array
router.post('/:user/task', function (req, res) {
    Task.create(req.body)
        .then((task) => {
            res.json(task)
            console.log(task)
        })
});

router.get('/:user/tasks', (req, res) => {
    User.find({ username: req.params.user })
        .populate('tasks')
        .then((users) => {
            res.json(users);
        });
});


router.patch('/:id/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.params.id;

    Task.findByIdAndUpdate(taskId, {
        user: userId,
    }, { new: true }
    ).then(() => {
        User.findByIdAndUpdate(userId, {
            $push: { tasks: taskId }
        }, {
            new: true
        })
            .populate('tasks', ['task', 'status'])
            .then((user) => res.status(200).json({ user: user }))
    });
});

module.exports = router;