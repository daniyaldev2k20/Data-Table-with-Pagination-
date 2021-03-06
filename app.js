const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const nobelRouter = require('./routes/nobel');

const app = express();

app.use(cors());

app.options('*', cors());

app.use(express.static('build'));

const limiter = rateLimit({
    max: 100, //max number of requests
    windowMs: 60 * 60 * 1000, //window period for requests
    message: 'Too many requests from this IP, please try again in an hour',
  });
  //limiter is applied to routes starting with URL /api
app.use('/api', limiter);

app.use(
    express.json({
      limit: '10kb',
    })
);

app.use(cookieParser());

app.use('/api/v1/nobel', nobelRouter);

module.exports = app;