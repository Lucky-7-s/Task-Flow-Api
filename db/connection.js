const mongoose = require('mongoose');

let mongoURI = '';

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = 'mongodb://localhost/users_db';
}

mongoose.connect(mongoURI);
// mongoose.connect('mongodb://localhost/users_db', { useNewUrlParser: true });

module.exports = mongoose;