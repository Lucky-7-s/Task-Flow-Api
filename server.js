require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userController');
const taskController = require('./controllers/taskController');

const PORT = process.env.PORT;

const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use('/user', userController);
app.use('/tasks', taskController);

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});