require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;

const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});