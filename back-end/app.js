const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const gameRoute = require('./routes/games');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');
const commentRoute = require('./routes/comments');

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:3001']
}))
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/game', gameRoute);
app.use('/user', userRoute);
app.use('/images', imageRoute);
app.use('/comment', commentRoute);

module.exports = app