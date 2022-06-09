const express = require('express');
const Task = require('../models/taskSchema');
const User = require('../models/userSchema');

const router = express.Router();

// GET all tasks
router.get('/', function (req, res) {
    Task.find({})
        .then((tasks) => {
            res.json(tasks);
        });
});

// POST - create a task
router.post('/', function (req, res) {
    Task.create(req.body)
        .then((task) => {
            res.json(task)
            console.log(task)
        })
});


// DELETE task by id
router.delete('/:id', function (req, res) {
    Task.findByIdAndDelete(req.params.id)
        .then((task) => {
            res.json(task)
        });
});

// // POST create new task
// router.post('/user/:username', function (req, res) {
//     const data = req.body;

//     Task.create(data)
//         .then((user) => res.status(201).json({
//             user: user
//         }));
// });

// // PATCH update task by id
// router.patch('/task/:id', function (req, res) {
//     const id = req.params.id;
//     const data = req.body;

//     Task.findByIdAndUpdate(id, data, { new: true })
//         .then((task) => res.status(200).json({ task: task }))
// });

module.exports = router;