// requiring dependencies
require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const taskController = require('./controllers/taskController');

// defining port
// const PORT = process.env.PORT;

const logger = require('morgan');
const cors = require('cors');

// Creating express app
const app = express();

app.use(express.json());
// logger middleware
app.use(logger('dev'));
app.use(cors());

// app routes
app.use('/user', userController);
app.use('/tasks', taskController);

// start app on port
app.set('port', process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(PORT, () => {
//     console.log(`Listening to port: ${PORT}`);
// });