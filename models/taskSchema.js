const mongoose = require('../db/connection');

const taskSchema = new mongoose.Schema({
    task: String,
    status: String,
});

module.exports = mongoose.model('Task', taskSchema);