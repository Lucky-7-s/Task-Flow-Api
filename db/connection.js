const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_db', { useNewUrlParser: true });

module.exports = mongoose;