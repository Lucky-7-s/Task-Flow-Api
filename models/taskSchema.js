const mongoose = require('../db/connection');

const taskSchema = new mongoose.Schema({
    task: String,
    status: String,
    user: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Task', taskSchema);